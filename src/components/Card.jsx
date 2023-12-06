
// const Card = () => {
//   return (
//     <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue dark:bg-purple-800 dark:border-gray-700 dark:hover:bg-blue-800">
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My name is Lucy, your virtual English teacher.</h5>
//       <p className="font-normal text-gray-700 dark:text-gray-400"> I have been teaching English for over 15 years. I believe anyone can learn English and improve their skills. I'm looking forward to working with you!</p>
//     </a>
//   );
// }

// export default Card;


// import { motion } from 'framer-motion';

// const Card = () => {
//   return (
//     <motion.a
//       href="#"
//       className="block max-w-sm p-6 bg-indigo-700-accent border border-gray-200 rounded-lg shadow dark:bg-indigo-700-accent dark:bg-indigo-700-accent dark:hover:bg-indigo-700-accent"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ scale: 1.05, backgroundColor: '#65fe08', color: '#000000' }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">My name is Lucy,<br></br> your virtual English teacher.</h5>
//       <p className="font-normal text-xl text-white dark:text-white"> I have been teaching English for over 15 years. I believe anyone can learn English and improve their skills. I'm looking forward to working with you!</p>
//     </motion.a>
//   );
// }

// export default Card;


import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.a
      href="#"
      className="block max-w-sm p-6 bg-indigo-700-accent border border-gray-200 rounded-lg shadow dark:bg-indigo-700-accent dark:bg-indigo-700-accent dark:hover:bg-indigo-700-accent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, backgroundColor: '#65fe08' }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.h5 
        className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        whileHover={{ color: '#000000' }}
      >
        My name is Lucy,<br></br> your virtual English teacher.
      </motion.h5>
      <motion.p 
        className="font-normal text-xl text-white dark:text-white"
        whileHover={{ color: '#000000' }}
      >
        I have been teaching English for over 15 years. I believe anyone can learn English and improve their skills. I'm looking forward to working with you!
      </motion.p>
    </motion.a>
  );
}

export default Card;


