// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Career from "./pages/Career";
import AluminiumWindow from "./pages/AluminiumWindow";
import HandRailing from "./pages/HandRailing";
import OfficePertition from "./pages/OfficePertition";
import ShowerCubicles from "./pages/ShowerCubicles";
import Blog from "./pages/Blog";
import ReadMoreDetails from "./components/ReadMoreDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/story" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/career" element={<Career />} />
      <Route path="/services/aluminiumwindow" element={<AluminiumWindow />} />
      <Route path="/services/handrailing" element={<HandRailing />} />
      <Route path="/services/officepertition" element={<OfficePertition />} />
      <Route path="/services/showercubicles" element={<ShowerCubicles />} />
      <Route path="/readmore/:id" element={<ReadMoreDetails />} />
    </Routes>
  );
}

export default App;
