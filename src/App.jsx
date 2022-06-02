// import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
// import Services from "./components/Services/Services";
import "./App.css";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/homePage/Home";
import SignUp from "./components/signup/SignUp";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <Router>
        <div
          className='App'
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          {/* <Navbar />
          <Intro />
          <Services />
          <Experience />
          <Works />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
