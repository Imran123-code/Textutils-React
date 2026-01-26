import "./App.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm1";
// import About from "./components/About1";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  //
  const [alert, setAlert] = useState(null);

  let showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("dark mood has been enabled", "Success");
      // document.getElementById("aboutcon").style.border = "1px solid gray";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mood has been enabled", "Success");
    }
  };
  // return (
  //   <Router>
  //     <Navbar
  //       title="Textutils"
  //       Name="Home"
  //       about="About"
  //       mode={mode}
  //       toggleMode={toggleMode}
  //     />
  //     <Alert alert={alert}/>
  //     <div className="container">
  //       <Routes>
  //         <Route
  //          exact path="/"
  //           element={<TextForm  showAlert = {showAlert} title="Enter your text here" mode={mode} />}
  //         />
  //         <Route exact path="/about" element={<About />}/>
  //       </Routes>
  //     </div>
  //   </Router>
  // );
  return (
    <>
      <Navbar
        title="Textutils"
        Name="Home"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container">
        <TextForm
          showAlert={showAlert}
          title="Enter your text here"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
