import { Link } from "react-router-dom";

function Header() {
  return(
    <>
    <h1>Do It Together</h1>
    <Link className="p-px border border-black rounded" to="/">Page d'accueil</Link>
    <Link className="p-px border border-black rounded ml-1" to="/about">à propos</Link>
    </>
  )
};
export default Header;
