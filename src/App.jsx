import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "./components/forget-password/index";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Home from "./components/homePage/Home";
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
            <Route path='/forget-password' element={<ForgetPassword />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
