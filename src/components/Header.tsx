import { Link } from "react-router-dom";
import "../style/App.css";
import { BsTools } from "react-icons/bs";

function Header() {
  return (
    <>
      <div>
        <Link className="btn-style-1" to="/">
          Page d'accueil
        </Link>
        <Link className="btn-style-1" to="/about">
          à propos
        </Link>
      </div>
      <div className="container-logo-dit">
        <h1 className="title-header">Do It Together</h1>
        <BsTools className="logo-dit"/>
      </div>
    </>
  );
}
export default Header;
