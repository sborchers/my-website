import React from "react";
import personalSite from "../../images/software/personal-site.png";
import weather from "../../images/software/weather.png";
import imageSearch from "../../images/software/image-search.png";
import airbnb from "../../images/software/airbnb.png";
import SoftwareProjectCard from "./software-project-card";
import styled from "styled-components";
import react from "../../icons/skills/react.jpg";
import angular from "../../icons/skills/angular.jpg";
import python from "../../icons/skills/python.jpg";
import ts from "../../icons/skills/ts.jpg";
import html from "../../icons/skills/html.png";
import css from "../../icons/skills/css.png";
import jupyter from "../../icons/skills/jupyter.jpg";

function BuiltProjects() {
  return (
    <ProjectsContainer>
      <SoftwareProjectCard
        title="This Site!"
        copy="A collection of my projects and skills"
        image={personalSite}
        href="https://stephborch.netlify.app/"
        source="https://github.com/sborchers/my-website"
        skills={[
          { href: "https://reactjs.org", source: react },
          { href: "https://www.typescriptlang.org", source: ts },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            source: html,
          },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            source: css,
          },
        ]}
      ></SoftwareProjectCard>
      <SoftwareProjectCard
        title="Weather App"
        copy="Check the forecast for any location"
        image={weather}
        href="https://stephborch-weather-app.netlify.app/"
        source="https://github.com/sborchers/weather-app"
        skills={[
          { href: "https://reactjs.org", source: react },
          { href: "https://www.typescriptlang.org", source: ts },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            source: html,
          },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            source: css,
          },
        ]}
      ></SoftwareProjectCard>
      <SoftwareProjectCard
        title="Image Search"
        copy="A place to search and view images"
        image={imageSearch}
        href="https://sb-image-search.netlify.app/"
        source="https://github.com/sborchers/image-search"
        skills={[
          { href: "https://angular.io", source: angular },
          { href: "https://www.typescriptlang.org", source: ts },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            source: html,
          },
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            source: css,
          },
        ]}
      ></SoftwareProjectCard>
      <SoftwareProjectCard
        title="Airbnb Listing Success"
        copy="A prediction model for success of Airbnb listings"
        image={airbnb}
        href="https://github.com/sborchers/TDI-Capstone"
        source="https://github.com/sborchers/TDI-Capstone"
        skills={[
          { href: "https://www.python.org", source: python },
          { href: "https://jupyter.org/", source: jupyter },
        ]}
      ></SoftwareProjectCard>
    </ProjectsContainer>
  );
}

export default BuiltProjects;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
`;
