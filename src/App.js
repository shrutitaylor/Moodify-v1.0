import React from 'react';
import Navbar from './fragments/navbar';
import Footer from './fragments/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoodSelector from './components/moodselection';
import Home from './components/home';
import PlaylistDisplay from './components/playlist-display';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#D8E8FF] to-[#359DFF]">
     
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <div className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */}
            <Route path="/moodselection" element={<MoodSelector />} />
            <Route path="/playlistdisplay" element={<PlaylistDisplay />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
