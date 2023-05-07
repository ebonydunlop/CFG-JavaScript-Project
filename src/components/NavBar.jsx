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
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About Us</li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Recipe Index</li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contact Us</li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  