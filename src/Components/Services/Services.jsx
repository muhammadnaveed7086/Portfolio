import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Humble from "../../img/humble.png";
import Resume from './naveed.pdf'
import {motion} from 'framer-motion'
import { themeContext } from "../../Context";

const Services = () => {
  const transition={duration:1.5,type:'spring'}
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div className="services" id="services">
      <div className="awesome">
      <span  style={{ color: darkmode ? "white" : "" }}>My awesome</span>
        <span>services</span>
        <span  style={{ color: darkmode ? "white" : "" }}>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
         <a href={Resume} download>
          <button className="button s-button">Download CV</button>
          </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div style={{left:'14rem'}}
        whileInView={{left:'14rem'}}
        initial={{left:'1%'}}
        transition={transition}
        >
        <Card
          emoji={Humble}
          heading={"Designer"}
          detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
        /></motion.div>
        {/* second card */}
        <motion.div style={{top:'12rem', left: '-4rem'}
        }
        whileInView={{left:'-4rem'}}
        initial={{left:'25%'}}
        transition={transition}>
        <Card
          emoji={Humble}
          heading={"Developer"}
          detail={"Html, Css, JavaScript, React, Nodejs, Express, Python, Java, C++ and others"}
        /></motion.div>
        {/* 3rd */}
        <motion.div style={{top:'19rem', left: '14rem'}}
        whileInView={{left:'14rem'}}
        initial={{left:'4%'}}
        transition={transition}
        >
        
        <Card
          emoji={Humble}
          heading={"UI/UX"}
          detail={
            ". UX design involves managing the user journey as they interact with a product or service."
          }
          color="rgba(252, 166, 31, 0.45)"
        /></motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
