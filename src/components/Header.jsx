
// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// const Header = () => {
// const [isOpen, setIsOpen] = useState(false);
// const node = useRef();

//   const handleClickOutside = e => {
//     if (node.current.contains(e.target)) {
//       return;
//     }
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className={`fixed text-center top-0 left-0 w-screen py-4 px-3 ${isOpen ? 'bg-transparent' : 'bg-purple-600'}`}>
//       <nav className="flex items-center justify-center flex-wrap p-6">
//         <div className="flex justify-between w-full lg:w-auto">
//           <div className="flex items-center flex-shrink-0 text-white mr-6">
//             <span className="font-semibold text-xl tracking-tight animate-spin">
//               English
//             </span>
//           </div>
//           <div className="block lg:hidden">
//             <button onClick={toggleMenu} className="block text-align-center width-300px px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
//               <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//             </button>
//           </div>
//         </div>

//         <div ref={node} className={`absolute right-0 top-0 ${isOpen ? 'block bg-green-500' : 'hidden'} lg:flex lg:items-center`} style={isOpen ? {width: '300px', height: '340px'} : {}}>
//           <div className="text-lg lg:flex-grow space-x-10">
//             <Link to="/welcome" className="block mt-4 lg:inline-block lg:mt-0 text-black text-xl hover:text-white hover:underline mr-4">Welcome</Link>
//             <Link to="/chatbot" className="block mt-4 lg:inline-block lg:mt-0 text-black text-xl hover:text-white hover:underline mr-4">Chatbot</Link>
//             <Link to="/politeenglish" className="block mt-4 lg:inline-block lg:mt-0 text-black text-xl hover:text-white hover:underline mr-4">Polite English</Link>
//             <Link to="/b1english" className="block mt-4 lg:inline-block lg:mt-0 text-black text-xl hover:text-white hover:underline mr-4">Like Alternatives</Link>
//             <Link to="/c1english" className="block mt-4 lg:inline-block lg:mt-0 text-black text-xl hover:text-white hover:underline mr-4">Modal Verbs</Link>
//             <Link to="/freelessons" className="block mt-4 lg:inline-block lg:mt-0 text-black text-xl hover:text-white hover:underline mr-4">Linking Words</Link>
//            </div>
//          </div>
//         </nav>
//        </header>
//     );
//    };

//  export default Header;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/americanlogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed text-center top-0 left-0 w-screen bg-white shadow">
      <nav className="px-6 py-4 container mx-auto md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-gray-800 text-2xl font-bold md:text-3xl tracking-tight animate-spin">
            <img src={logo} alt='logo' className="h-12 w-auto"/></a>
          </div>
          <div className="md:hidden">
{isOpen ? (
  <button type="button" className="block bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(!isOpen)}>
  <svg className="h-6 w-6" viewBox="0 0 20 20" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
  <title>Close Menu</title>
  <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
) : (
  <button type="button" className="block bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(!isOpen)}>
    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Open Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
    </svg>
  </button>
)}

  </div>
</div>
        <div className={`md:flex space-x-10 ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/welcome" className="block font-bold mt-4 md:inline-block md:mt-0 text-black hover:scale-110 hover:text-green-400 transform transition-transform duration-200 mr-6">Welcome</Link>
        <Link to="/chatbot" className="block font-bold mt-4 md:inline-block md:mt-0 text-black hover:scale-110 hover:text-green-400 transform transition-transform duration-200 mr-6">Chatbot</Link>
        <Link to="/politeenglish" className="block font-bold mt-4 md:inline-block md:mt-0 text-black hover:scale-110 hover:text-green-400 transform transition-transform duration-200 mr-6">Polite English</Link>
        <Link to="/form" className="block font-bold mt-4 md:inline-block md:mt-0 text-black hover:scale-110 hover:text-green-400 transform transition-transform duration-200 mr-6">Contact</Link>
</div>
</nav>
</header>
);
};

export default Header;































