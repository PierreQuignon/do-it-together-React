import { Link } from "react-router-dom";
import "../style/App.css";
import { BsTools } from "react-icons/bs";

function Header() {
  return (
    <>
        <Link className="btn-style-1" to="/about">
          à propos
        </Link>
        <Link to="/">
          <div className="container-logo-dit">
            <h1 className="title-header">Do It Together</h1>
            <BsTools className="logo-dit" />
          </div>
        </Link>
    </>
  );
}
export default Header;
