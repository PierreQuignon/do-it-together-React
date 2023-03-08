import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";
import Workshops from "./pages/Workshops";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import Workshop from "./pages/Workshop";
import "./style/Header.css";
import "./style/Footer.css";
import "./style/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container-app">
        <div className="header-container">
          <Header />
        </div>
        <div className="body-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshop/:workshopId" element={<Workshop />} />
          </Routes>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
