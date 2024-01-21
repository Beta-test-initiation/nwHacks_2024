import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = ({ onTranscriptUpdate }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true });
    }

    // Optional: Stop listening when component unmounts
    return () => {
      SpeechRecognition.stopListening();
    };
  }, [browserSupportsSpeechRecognition]);

  // UseEffect hook to call onTranscriptUpdate when transcript changes
  useEffect(() => {
    onTranscriptUpdate(transcript);
  }, [transcript, onTranscriptUpdate]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default Dictaphone;