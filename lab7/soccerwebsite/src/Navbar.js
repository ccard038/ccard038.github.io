import image from "./images/sandyhill.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Home = "Home";
  let Learn = "Learn More";
  let Standings = "Standings";
  let Register = "Registration";
  if (window.lang === "fr") {
    Home = "Domicile";
    Learn = "Apprendre plus";
    Standings = "Classement";
    Register = "S'inscrire";
  }
  if (window.lang === "en") {
    Home = "Home";
    Learn = "Learn More";
    Standings = "Standings";
    Register = "Regsiter";
  }

  return (
    <nav className="navbar">
      <img className="sandy" src={image} alt="" />
      <h1>Sandy Hill Recreational Soccer</h1>
      <div className="links">
        <Link to="/">{Home}</Link>
        <Link to="/learnmore">{Learn}</Link>
        <Link to="/standings">{Standings}</Link>
        <Link to="/register">{Register}</Link>
      </div>
    </nav>
  );
};

export default Navbar;

/* <nav className="navbar">
      <img className="sandy" src={image} alt="" />
      <h1>Sandy Hill Soccer</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/learnmore">Learn More</Link>
        <Link to="/standings">Standings</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav> */
