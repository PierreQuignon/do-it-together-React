import { Link } from "react-router-dom";
import "../style/App.css";

function Header() {
  return(
    <>
    <h1>Do It Together</h1>
    <Link className="btn-style-1" to="/">Page d'accueil</Link>
    <Link className="btn-style-1" to="/about">à propos</Link>
    </>
  )
};
export default Header;
