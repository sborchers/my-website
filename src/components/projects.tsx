import React from "react";
import daysEnd from "../images/days-end.jpg";

function Projects() {
  return (
    <nav>
      <h2>Projects</h2>
      <p>
        <strong>Software</strong>
      </p>
      <a
        href="https://www.linkedin.com/in/stephanie-borchers-pe-88987869/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gallery App
      </a>
      |
      <a
        href="https://github.com/sborchers/TDI-Capstone"
        target="_blank"
        rel="noopener noreferrer"
      >
        Success Prediction for Airbnb Listings
      </a>
      <p>
        <strong>Built Environment</strong>
      </p>
      <p>MFAH</p>
      <img src={daysEnd} alt="Day's End" />
      <p>IAS</p>
      <img src={daysEnd} alt="Day's End" />
      <p>Day's End</p>
      <img src={daysEnd} alt="Day's End" />
      <p>SLT</p>
      <img src={daysEnd} alt="Day's End" />
      <p>MFAH</p>
      <img src={daysEnd} alt="Day's End" />
      <p>LMC</p>
      <img src={daysEnd} alt="Day's End" />
      <p>MPK22</p>
      <img src={daysEnd} alt="Day's End" />
      <p>G5 Garage</p>
      <img src={daysEnd} alt="Day's End" />
    </nav>
  );
}

export default Projects;
