import React from "react";
import styled from "styled-components";
import react from "../../icons/react.jpg";
import angular from "../../icons/angular.jpg";
import ts from "../../icons/ts.jpg";
import js from "../../icons/js.jpg";
import python from "../../icons/python.jpg";

function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <IconContainer>
        <img
          src={react}
          alt="React"
          style={{ height: 60, padding: "0 10px" }}
        />
        <img
          src={angular}
          alt="Angular"
          style={{ height: 60, padding: "0 10px" }}
        />
        <img
          src={ts}
          alt="Typescript"
          style={{ height: 60, padding: "0 10px" }}
        />
        <img
          src={js}
          alt="Javascript"
          style={{ height: 60, padding: "0 10px" }}
        />
        <img
          src={python}
          alt="Python"
          style={{ height: 60, padding: "0 10px" }}
        />
      </IconContainer>
    </div>
  );
}

export default Skills;

const IconContainer = styled.div``;
