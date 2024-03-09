import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { themeContext } from "./Context";
import { Routes, Route } from "react-router-dom";
function App() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkmode ? "black" : "",
        color: darkmode ? "white" : "",
      }}
    >
       <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer/>    
      
    </div>
  );
}

export default App;
