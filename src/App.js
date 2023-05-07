import Pages from "./pages/Pages";
import "./App.css";
import Logo from "./assets/images/Logo.png"

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
        <h1 id="site-name">The Recipe Router</h1>
        <img src={Logo} alt="The Recipe Router Logo" id="logo" />
      </div>
      <Pages />
    </div>
  );
}

export default App;
