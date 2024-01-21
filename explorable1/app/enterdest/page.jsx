"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Map from './Map';

const TextToSpeechService = {
  speak: (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser.');
    }
  },
};

const Page = () => {
  const [destination, setDestination] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  let locationDescription =
    "The UBC nest is a beautiful meeting spot for people to hangout. Whether you want to grab a quick coffee and a cookie from bluechip, treat yourself to some sushi or go and party at the Pit, the UBC nest has it all.";

  const handleStartButtonClick = () => {
    TextToSpeechService.speak("You are in the nest");
    // Additional logic for navigation here

   
    TextToSpeechService.speak(locationDescription);
  };

  useEffect(() => {
    // This will be executed when the component mounts
    if (!hasStarted) {
      handleStartButtonClick();
      setHasStarted(true);
    }
  }, [hasStarted]);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div className='flex items-center mt-10'>
      <div className="w-1/2 ml-10">
        <Map destination={destination} />
      </div>
      <div className="mt-3 w-1/2 ml-60 flex justify-end">
        <input
          className="w-80 shadow appearance-none border text-black rounded-lg w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            
          }}
        />
        <Link href="/path">
          <button
            className="ml-5 bg-[#7975FF] rounded-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
