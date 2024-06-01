import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const toggleMode = (color, event) => {
    event.preventDefault();
    if (color === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setMyStyle({
        backgroundColor: "#373A40",
        color: "white",
      });
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil - Dark";
    } else if (color === "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setMyStyle({
        backgroundColor: "#4D869C",
        color: "white",
      });
      document.title = "TextUtil - Light";
    } else if (color === "green") {
      setMode("success");
      document.body.style.backgroundColor = "#40A578";
      showAlert("Green mode has been enabled", "success");
      setMyStyle({
        backgroundColor: "#40A578",
        color: "white",
      });
      document.title = "TextUtil - Green";
    }
  };

  const [myStyle, setMyStyle] = useState({
    backgroundColor: "#4D869C",
    color: "white",
  });
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} myStyle={myStyle} />
      <Alert alert={alert} />
      <div className="container my-3">
        
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text To Analyze"
                  mode={mode}
                  myStyle={myStyle}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} myStyle={myStyle}/>} />
          </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;
