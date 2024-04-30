import React from "react";
import daysEnd from "../../images/days-end.jpg";
import motherSon from "../../images/mother-son.jpg";
import ProjectCard from "./project-card";
import styled from "styled-components";

function BuiltProjects() {
  return (
    <ProjectsContainer>
      <ProjectCard
        title="MFAH"
        copy="Museum (New Construction)"
        source={daysEnd}
      ></ProjectCard>
      <ProjectCard
        title="IAS"
        copy="Institute (New Construction)"
        source={daysEnd}
      ></ProjectCard>
      <ProjectCard
        title="Day's End"
        copy="Sculpture"
        source={daysEnd}
      ></ProjectCard>
      <ProjectCard
        title="Mother and Son"
        copy="Sculpture"
        source={motherSon}
      ></ProjectCard>
      <ProjectCard title="LMC" copy="Office" source={daysEnd}></ProjectCard>
      <ProjectCard title="MPK22" copy="Office" source={daysEnd}></ProjectCard>
      <ProjectCard
        title="G5 Garage"
        copy="Parking Garage"
        source={daysEnd}
      ></ProjectCard>
      <ProjectCard
        title="SLT"
        copy="Temple (Renovation)"
        source={daysEnd}
      ></ProjectCard>
    </ProjectsContainer>
  );
}

export default BuiltProjects;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
