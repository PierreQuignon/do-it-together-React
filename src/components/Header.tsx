import { Link } from "react-router-dom";
import "../style/App.css";

function Header() {
  return(
    <>
    <div>
    <Link className="btn-style-1" to="/">Page d'accueil</Link>
    <Link className="btn-style-1" to="/about">à propos</Link>
    </div>
    <h1 className="title-header">Do It Together</h1>
    </>
  )
};
export default Header;
