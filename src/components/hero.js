import React from "react";

import logo from "../assets/logo.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="ICHOS logo" width="120" />
    <h1 className="mb-4"> <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/drive/folders/1w4x_LBawHv5QIQ2AFRJeAI0DlOE7q7Sg?usp=sharing"
      >
        <b>ICHOS</b>
      </a> <br />Noise Awareness App</h1>

    <p className="lead">
    You can close your eyes
But you can’t close your ears Choose the quieter life with {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/drive/folders/1w4x_LBawHv5QIQ2AFRJeAI0DlOE7q7Sg?usp=sharing"
      >
        <b>ICHOS</b>
      </a>
    </p>
  </div>
);

export default Hero;
