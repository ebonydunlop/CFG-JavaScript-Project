import Home from "./Home";
import AboutUs from "./AboutUs";
import RecipeIndex from "./RecipeIndex";
import Contact from "./Contact";
import Error from "./Error";
import React from 'react';
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/index" element={<RecipeIndex />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
  )
}

export default Pages