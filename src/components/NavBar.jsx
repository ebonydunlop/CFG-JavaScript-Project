import { Link } from "react-router-dom"

function NavBar() {
    const handleMouseOver = (event) => {
      event.target.style.color = "#8BC34A";
    };
  
    const handleMouseOut = (event) => {
      event.target.style.color = "black";
    };
  
    return (
      <nav className="navigation-bar">
        <ul>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to="/">Home</Link>
          </li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to="/about">About Us</Link>
          </li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to="/index">Recipe Index</Link>
          </li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  