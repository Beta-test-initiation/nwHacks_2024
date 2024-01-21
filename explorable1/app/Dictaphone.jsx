
// import React, { useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const Dictaphone = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   useEffect(() => {
//     if (browserSupportsSpeechRecognition) {
//       SpeechRecognition.startListening({ continuous: true });
//     }
//   }, [browserSupportsSpeechRecognition]);

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>{transcript}</p>
//     </div>
//   );
// };

// export default Dictaphone;
