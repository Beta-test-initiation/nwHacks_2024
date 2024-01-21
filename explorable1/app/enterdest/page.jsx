"use client"

import React, {useEffect} from 'react'
import Link from 'next/link'



// Importing Map component separately
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

const page = () => {

  const handleStartButtonClick = () => {
    const destinationInput = document.getElementById('username');
    
      TextToSpeechService.speak(`Starting navigation to wherever you want`);
      // Add additional logic for navigation here
    
  };

  useEffect(() => {
    // This will be executed when the component mounts
    handleStartButtonClick();
  }, []); // Empty dependency array means it runs once when the component mounts


  
  
  return (
    <div className='flex items-center  mt-10'>
        <div className="w-1/2 ml-10  ">
          <Map/>
          
        </div>
        <div className="mt-3 w-1/2 ml-60 flex justify-end">
            <input clasName="w-80 mt-10 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Destination"></input>
            <Link href="/path">
              <button onClick={handleStartButtonClick}
              className=" ml-5 bg-[#7975FF] rounded-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Start
              </button>
            </Link>


            <button onClick={handleStartButtonClick}
              className=" ml-5 bg-[#7975FF] rounded-lg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Start
              </button>
            
            
        </div>
    </div>
  )
}

export default page