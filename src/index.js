import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import AboutUs from './pages/AboutUs';
import RecipeIndex from "./pages/RecipeIndex";
import Error from "./pages/Error";
import Contact from "./pages/Contact"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />}>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/index" element={<RecipeIndex />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

