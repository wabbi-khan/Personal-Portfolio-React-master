import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Cartoon from "../../img/cartoon.png";
import file from "../../img/file.png";
import meeting from "../../img/meeting.png";
import employee from "../../img/employee.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='Intro' id='Intro'>
      {/* left name side */}
      <div className='i-left'>
        <div className='i-name'>
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! We Are</span>
          <span>Solution Provider</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to='contact' smooth={true} spy={true}>
          <button className='button i-button' style={{ width: "150px" }}>
            Contact Us
          </button>
        </Link>
        {/* social icons */}
        <div className='i-icons'>
          <img src={Github} alt='' />
          <img src={LinkedIn} alt='' />
          <img src={Instagram} alt='' />
        </div>
      </div>
      {/* right image side */}
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={Cartoon} width={300} alt='' />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className='floating-div'
        >
          <FloatinDiv img={employee} text1='Employees' text2='Management' />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className='floating-div'
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={file} text1='Files' text2='Management' />
        </motion.div>
        <motion.div
          initial={{ top: "70%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className='floating-div'
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={meeting} text1='Meeting' text2='Scheduler' />
        </motion.div>

        <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className='blur'
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
