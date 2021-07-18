import image from "./images/sandyhill.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="sandy" src={image} alt="" />
      <h1>Sandy Hill Soccer</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/learnmore">Learn More</Link>
        <Link to="/standings">Standings</Link>
        <Link to="/register">Register</Link>
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
