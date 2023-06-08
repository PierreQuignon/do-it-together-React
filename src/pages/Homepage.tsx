import { Link } from "react-router-dom";
import "../style/Homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <Link to="/workshops">Découvrir les ateliers</Link>
    </div>
  );
}

export default Homepage;
