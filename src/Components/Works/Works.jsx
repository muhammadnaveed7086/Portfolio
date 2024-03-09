import React from "react";
import "./Works.css";
import {motion} from 'framer-motion'
const Works = () => {
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
       <span>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          
            <button className="button s-button">Hire Me</button>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      
      <div className="w-right">
      <motion.div className="w-mainCircle"
       initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div className="w-secCircle">
            <img src='./images/Upwor.png' alt="" />
          </div>
          <div className="w-secCircle">
            <img src='./images/fiverr.png' alt="" />
          </div>
          <div className="w-secCircle">
            <img src='./images/amazon.png' alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src='./images/Shopify.png' alt="" />
          </div>
          <div className="w-secCircle">
            <img src='./images/Facebook.png' alt="" />
          </div>  </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
