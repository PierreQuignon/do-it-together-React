import { Link } from "react-router-dom";

function Header() {
  return(
    <>
    <h1>Do It Together</h1>
    <Link to="/">Page d'accueil</Link>
    <Link to="/about">à propos</Link>
    </>
  )
};
export default Header;
