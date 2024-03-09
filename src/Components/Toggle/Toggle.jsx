import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const handleClick=()=>{
    theme.dispatch({type:'toggle'})
  }
  const theme=useContext(themeContext)
  const darkmode=theme.state.darkMode
  return (
    <div className="toggle">
      <Moon />
      <Sun />
      <div className="t-button" onClick={handleClick}
      style={darkmode?{left:  '2px'}:{right:'2px'}}>
      </div>
    </div>
  );
};
export default Toggle;
