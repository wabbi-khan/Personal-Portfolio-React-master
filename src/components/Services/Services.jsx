import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import file from "../../img/file.png";
import meeting from "../../img/meeting.png";
import employee from "../../img/employee.png";
// import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className='services' id='services'>
      {/* left side */}
      <div className='awesome'>
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>services</span>
        <spane style={{ fontSize: "20px", color: "black" }}>
          We are Providing the Best services of Office Automation. <br /> Our
          Motive is to provide a Solution for your Business.
        </spane>
        {/* <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a> */}
        <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className='cards'>
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={employee}
            heading={"Employees Management"}
            detail={
              "Employee management is based on ideas and  procedures  developed  to  increase worker  motivation ,  productivity  and   performance .  "
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={file}
            heading={"Files Management"}
            detail={
              "A file management system is used for file maintenance (or management) operations. It is is a type of software that manages data files in a computer system. A file management system has limited capabilities and is designed to manage individual or group files."
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={meeting}
            heading={"Meeting Scheduler"}
            detail={
              "The purpose of the meeting scheduler system is to support the organization of meetings - that is, to determine, for each meeting request, a meeting date and location so that most of the intended."
            }
            color='rgba(252, 166, 31, 0.45)'
          />
        </motion.div>
        <div
          className='blur s-blur2'
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
