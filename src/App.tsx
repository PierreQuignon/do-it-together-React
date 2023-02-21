// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import Index from "./pages/Index";
import Workshop from "./pages/Workshop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
        <div className="border border-black">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/index" element={<Index />} />
            <Route path="/workshop/:workshopParams" element={<Workshop />} />
          </Routes>
        </div>
        <div className="border border-black">
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
