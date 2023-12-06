

// function Form() {
//     return (
//         <div className="w-full max-w-xs mx-auto mt-20">
//             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//                         Name
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your name"/>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         Email
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email"/>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//                         Message
//                     </label>
//                     <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="3"></textarea>
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//                         Send
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Form;




// import { useState } from 'react';

// function Form() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
//         // Here you can handle the form data, e.g., send it to a server
//         fetch('https://formspree.io/f/mleykrkd', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: name,
//                 email: email,
//                 message: message
//             })
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     };


//     return (
//         <div className="w-full max-w-xs mx-auto mt-20">
//             <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//                         Name
//                     </label>
//                     <input value={name} onChange={e => setName(e.target.value)} className="shadow appearance-none border text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your name"/>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         Email
//                     </label>
//                     <input value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email"/>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//                         Message
//                     </label>
//                     <textarea value={message} onChange={e => setMessage(e.target.value)} className="shadow appearance-none border  text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="3"></textarea>
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//                         Send
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Form;







// import { useForm, ValidationError } from '@formspree/react';

// function ContactForm() {
//   const [state, handleSubmit] = useForm("mleykrkd");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default ContactForm;


import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mleykrkd");
  if (state.succeeded) {
      return <p>We'll get back to you ASAP!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto py-10 px-5 m-5 bg-white shadow-lg rounded-lg">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        className="shadow text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        className="text-red-500 text-xs italic"
      />

      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="shadow text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="text-red-500 text-xs italic"
      />
      <textarea
        id="message"
        name="message"
        className="shadow text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="text-red-500 text-xs italic"
      />
      <button type="submit" disabled={state.submitting} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;




