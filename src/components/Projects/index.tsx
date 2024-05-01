import React from "react";
import BuiltProjects from "../ProjectCard";

function Projects() {
  return (
    <nav>
      <h2>Projects</h2>
      <p>
        <strong>Software</strong>
      </p>
      <p>In progress :) Watch this space!</p>
      <a
        href="https://github.com/sborchers/my-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        This Site!
      </a>
      {/* |
      <a
        href="https://github.com/sborchers/art-gallery-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gallery App
      </a> */}
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
      <p>Here's a sample of projects that I've worked on over the years!</p>
      <BuiltProjects></BuiltProjects>
    </nav>
  );
}

export default Projects;
