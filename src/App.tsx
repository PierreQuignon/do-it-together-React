// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import Index from "./pages/Index";
import Workshop from "./pages/Workshop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />}/>
        <Route path="/index" element={<Index />}/>
        <Route path="/workshop/:workshopParams" element={<Workshop />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
