import sprocket from "../assets/sprocket.svg";
import "../style/Logo.css";

function Logo() {
  return (
    <>
      <div className="logo-container">
      <p className="do-it-logo">Do It</p>
      <img className="rotation-logo" src={sprocket} />
      <p className="together-logo">Together</p>
      </div>
    </>
  );
}

export default Logo;
