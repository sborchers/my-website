import React from "react";
import BuiltProjects from "../ProjectCard";

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
      <BuiltProjects></BuiltProjects>
    </nav>
  );
}

export default Projects;
