import React from "react";
import styled from "styled-components";
import Project from "./Project";
import IntersectionObserver from "../IntersectionObserver";

function Projects() {
  return (
    <StyledProjects id="projects">
      <Article>
        <ProjectsTitle>
          <IntersectionObserver>
            <Title>Projects</Title>
          </IntersectionObserver>
        </ProjectsTitle>
        <ProjectsContent>
          <IntersectionObserver>
            <Project index="0"></Project>
          </IntersectionObserver>
          <IntersectionObserver>
            <Project index="1"></Project>
          </IntersectionObserver>
          <IntersectionObserver>
            <Project index="2"></Project>
          </IntersectionObserver>
        </ProjectsContent>
      </Article>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bg_2};
`;
const Article = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 964px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 708px;
  }
  @media screen and (max-width: 768px){
    width: calc(100% - 60px);
    margin: 0 30px;
  }
`;
const ProjectsTitle = styled.div`
  padding: 120px 0;
`;
const Title = styled.p`
  text-align: center;
  font-size: 40px;
`;
const ProjectsContent = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;
const ProjectsList = styled.div`
  @media screen and (min-width: 1024px){
    height: 800px;
    position: relative;
  }
  @media screen and (max-width: 1024px){
  }
  
`;
export default Projects;
