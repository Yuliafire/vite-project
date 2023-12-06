// import { useState } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [message, setMessage] = useState("");
//   const [responses, setResponses] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = event => {
//     setMessage(event.target.value);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     try {
//       const gpt3Response = await axios.post(
//         'https://api.openai.com/v1/engines/davinci-codex/completions',
//         {
//           prompt: message,
//           max_tokens: 60,
//         },
//         {
//           headers: {
//             'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       setResponses(oldArray => [...oldArray, { message: message, response: gpt3Response.data.choices[0].text }]);
//     } catch (error) {
//       setError(error.message);
//     }

//     setIsLoading(false);
//     setMessage("");
//   };

//   return (
//     <div className="w-screen min-h-screen">
//     <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
//       <h1 className="text-xl text-black font-bold">Chat with<br></br>Lucy</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <input type="text" value={message} onChange={handleChange} className="p-2 border rounded" />
//         <input type="submit" value="Ask" className="p-2 mt-2 bg-blue-600 text-white rounded cursor-pointer" />
//       </form>
//       <div className="mt-4">
//         {isLoading && <p>Loading...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {responses.map((item, index) => (
//           <div key={index} className="mt-2">
//             <p className="font-bold">User: {item.message}</p>
//             <p className="text-blue-500">Bot: {item.response}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Chatbot;




{/* <>
  <div className="chat-container" />
  {/* Typing container */}
//   <div className="typing-container">
//     <div className="typing-content">
//       <div className="typing-textarea">
//         <textarea
//           id="chat-input"
//           spellCheck="false"
//           placeholder="Enter a prompt here"
//           required=""
//           defaultValue={""}
//         />
//         <span id="send-btn" className="material-symbols-rounded">
//           send
//         </span>
//       </div>
//       <div className="typing-controls">
//         <span id="theme-btn" className="material-symbols-rounded">
//           light_mode
//         </span>
//         <span id="delete-btn" className="material-symbols-rounded">
//           delete
//         </span>
//       </div>
//     </div>
//   </div>
// </> */}




import { useState } from 'react';
import axios from 'axios';
// import { useSpeechSynthesis } from 'react-speech-kit';


const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const { speak } = useSpeechSynthesis();

  const sendMessage = async () => {
    try {
      // Send message to GPT-3 API
      const gpt3Res = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: message,
        max_tokens: 60,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`
        }
      });

      // Get response
      const botMessage = gpt3Res.data.choices[0].text.trim();

      // Speak out the response
      speak({ text: botMessage });
      
      // Set bot's response
      setResponse(botMessage);
      
      // Reset error state
      setError(null);
    } catch (err) {
      setError('Error communicating with the API. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col p-5 bg-white rounded shadow-md">
        <input 
          className="p-3 border rounded mb-2" 
          value={message} 
          onChange={e => setMessage(e.target.value)} 
          placeholder="Ask something..."
        />
        <button 
          className="p-3 bg-blue-500 text-white rounded" 
          onClick={sendMessage}
        >
          Send
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-xl mb-4">Bot's Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chatbot;


