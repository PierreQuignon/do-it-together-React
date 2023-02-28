import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import Workshops from "./pages/Workshops";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import Workshop from "./pages/Workshop";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-amber-50">
        <div className="border border-black">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshop/:workshopId" element={<Workshop />} />
          </Routes>
        </div>
        <div className="border border-black">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
