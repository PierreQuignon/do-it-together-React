// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import Index from "./pages/Index";
import Workshop from "./pages/Workshop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

export interface Workshop {
  id: number;
  owner: string;
  title: string;
  squareMeter: number;
  content: string;
  electricity: boolean;
  water: boolean;
  location: string;
  phone: string;
  price: number;
}

const App: any = () => {
  const [workshops, setWorkshops] = useState<Workshop[] | []>([]);

  useEffect(() => {
    fetch("./src/dataset.json")
      .then((res) => res.json())
      .then((resJson) => {
        setWorkshops(resJson.workshops)
      });
  }, []);

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
};

export default App;
