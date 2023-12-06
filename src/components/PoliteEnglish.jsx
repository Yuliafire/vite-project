import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const PoliteEnglish = () => {
    const navigate = useNavigate();

    const handleTestClick = () => {
        navigate("/PoliteEnglishTest");
    }

    return (
        // <div style={{ backgroundColor: 'black', width: "100vw", height: '100vh' }}>
        <>
         <motion.h2
                className="text-4xl font-bold mb-6 text-center text-purple-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                Polite English Vocabulary
            </motion.h2>

            <motion.video
                className="mb-4 max-w-lg"
                controls
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                <source src="src/assets/videos/politeenglish.mp4" type="video/mp4" />
            </motion.video>

            <motion.button
                className="mt-4 bg-purple-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleTestClick}
            >
                TEST
            </motion.button>
        
        </>
    )
}

export default PoliteEnglish;



