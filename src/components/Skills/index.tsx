import React from "react";
import styled from "styled-components";
import react from "../../icons/react.jpg";
import angular from "../../icons/angular.jpg";
import ts from "../../icons/ts.jpg";
import js from "../../icons/js.jpg";
import python from "../../icons/python.jpg";
import docker from "../../icons/docker.jpg";
import go from "../../icons/go.jpg";
import graphql from "../../icons/graphql.jpg";
import jupyter from "../../icons/jupyter.jpg";
import postgresql from "../../icons/postgresql.jpg";
import auth0 from "../../icons/auth0.jpg";
import gcp from "../../icons/gcp.jpg";

function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <IconContainer>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={react} alt="React" style={{ height: 60 }} />
        </a>
        <a href="https://angular.io" target="_blank" rel="noopener noreferrer">
          <img src={angular} alt="Angular" style={{ height: 60 }} />
        </a>
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ts} alt="Typescript" style={{ height: 60 }} />
        </a>
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={js} alt="Javascript" style={{ height: 60 }} />
        </a>
        <a
          href="https://www.python.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={python} alt="Python" style={{ height: 60 }} />
        </a>
        <a href="https://golang.org/" target="_blank" rel="noopener noreferrer">
          <img src={go} alt="Go" style={{ height: 60 }} />
        </a>
        <a
          href="https://www.postgresql.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={postgresql} alt="postgresql" style={{ height: 60 }} />
        </a>
        <a
          href="https://www.graphql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={graphql} alt="graphql" style={{ height: 60 }} />
        </a>
        <a
          href="https://jupyter.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={jupyter} alt="jupyter" style={{ height: 60 }} />
        </a>
        <a
          href="https://www.docker.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={docker} alt="Docker" style={{ height: 60 }} />
        </a>
        <a
          href="https://cloud.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gcp} alt="Google Cloud Platform" style={{ height: 60 }} />
        </a>
        <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
          <img src={auth0} alt="auth0" style={{ height: 60 }} />
        </a>
      </IconContainer>
    </div>
  );
}

export default Skills;

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  row-gap: 40px;
  column-gap: 20px;
  justify-items: center;
  max-width: 700px;
  margin: 0 auto;
`;
