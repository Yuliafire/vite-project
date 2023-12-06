import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Welcome = () => {

  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/chatbot");
};
    return (
        <div className="flex justify-around items-center w-screen min-h-screen min-h-fit bg-black">
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen  p-4 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h2
                className="text-4xl font-bold mb-4 text-center text-green-400"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                Welcome to English Class!
            </motion.h2>
            <motion.video
                className="mb-4 max-w-lg"
                controls
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                <source src="src/assets/videos/welcome.mp4" type="video/mp4" />
            </motion.video>
          

            <motion.button
                className="mt-4 bg-green-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleStartClick}
            >
                START
            </motion.button>
        </motion.div>
        <Card />
       </div>
    );
};

export default Welcome;



