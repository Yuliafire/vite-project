import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'; // adjust the path as needed
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import PoliteEnglish from './components/PoliteEnglish';
import PoliteEnglishTest from './components/PoliteEnglishTest';
import ContactForm from './components/ContactForm';

// import '@fortawesome/fontawesome-free/css/all.min.css';


import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  };
  `


function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <div className="App flex flex-col items-center justify-center min-h-screen">
        <Header />
        {/* <Welcome /> */}

          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/politeenglish" element={<PoliteEnglish />} />
            <Route path="/PoliteEnglishTest" element={<PoliteEnglishTest />} />
            <Route path="/form" element={<ContactForm />} />

          {/* Add more Route components as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App;


