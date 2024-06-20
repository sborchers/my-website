import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CodeIcon from "@mui/icons-material/Code";
import styled from "styled-components";

type ProjectCardProps = {
  title: string;
  copy: string;
  image: string;
  source: string;
  href: string;
  skills?: ProjectSkill[];
};

type ProjectSkill = {
  href: string;
  source: string;
};

const SoftwareProjectCard: React.FC<ProjectCardProps> = ({
  title,
  copy,
  image,
  source,
  href,
  skills,
}) => {
  return (
    <ProjectCard>
      <CardActionArea
        sx={{ width: 150 }}
        component="a"
        href={href}
        target="_blank"
      >
        <CardMedia
          sx={{ width: 150 }}
          component="img"
          image={image}
          alt={title}
        />
      </CardActionArea>
      <CardContent>
        <CardTypography gutterBottom variant="h6">
          {title}
        </CardTypography>
        <CardTypography variant="body2" color="text.secondary">
          {copy}
        </CardTypography>
        <IconContainer>
          <SkillContainer>
            {skills?.map((skill) => (
              <a href={skill.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={skill.source}
                  alt={skill.source}
                  style={{ height: 24, paddingRight: 8 }}
                />
              </a>
            ))}
          </SkillContainer>
          <IconButton href={source} target="_blank">
            <CodeIcon />
          </IconButton>
        </IconContainer>
      </CardContent>
    </ProjectCard>
  );
};

export default SoftwareProjectCard;

const ProjectCard = styled(Card)`
  display: flex;
  height: 142px;
  width: 400px;
`;

const CardTypography = styled(Typography)`
  text-align: left;
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SkillContainer = styled.div``;
