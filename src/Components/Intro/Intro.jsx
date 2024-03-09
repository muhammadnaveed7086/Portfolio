import React, { useContext } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
function Intro() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="Intro">
      {/* Left */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkmode ? "white" : "" }}>Hi! I Am</span>
          <span>Muhammad Naveed</span>
          <span
            style={{
              color: darkmode ? "white" : "",
            }}
          >
            Frontend Developer with high level of experience in web disigning
            and development, producing te quility work. Completed many projects
            like eCommerece websites and apps.
          </span>
          <button className="i-button button">Hire me</button>
          <div className="i-icons">
            <img src="./images/github.png" alt="" />
            <img src="./images/linkedin.png" alt="" />
            <img src="./images/instagram.png" alt="" />
          </div>
        </div>
      </div>
      {/* Right */}

      <motion.div
        className="i-right"
        initial={{ left: "4rem" }}
        whileInView={{ left: "1%" }}
        transition={transition}
        whileFocus={{ left: "0" }}
      >
        <img src="./images/Vector1.png" alt="" />
        <img src="./images/Vector2.png" alt="" />
        <img src="./images/boy.png" alt="" />
      </motion.div>
    </div>
  );
}

export default Intro;
