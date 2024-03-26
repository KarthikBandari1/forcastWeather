import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/KarthikBandari1/forcastWeather.git">
          Source Code
        </a>{" "}
        | Developed by{" "}
        <a  href="https://www.linkedin.com/in/bandari-karthik">
          Bandari Karthik
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
