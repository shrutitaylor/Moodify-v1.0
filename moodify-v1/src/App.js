import React from 'react';
import Navbar from './fragments/navbar';
import Footer from './fragments/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import MoodSelector from './components/moodselection';

const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#D8E8FF] to-[#359DFF]">
      <Navbar /> {/* Navbar */}
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/moodselection" element={<MoodSelector />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
    <Footer /> {/* Footer */}
    </div>
    </>
   
  );
};

export default App;
