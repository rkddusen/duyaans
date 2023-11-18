import React from "react";
import styled from "styled-components";

const Link = ({ size = 22 }) => (
  <StyledSvg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></StyledSvg>
);
const StyledSvg = styled.svg`
  stroke: ${props => props.theme.color};
`;

function Project(props) {
  const { style, img, title, explain, link, git } = props;
  return (
    <StyledProject style={style}>
      <ImgArea>
        <StyledImg onClick={() => {
            window.open(link)
          }}
          src={img}
          alt={title} />
      </ImgArea>
      <ProjectExplain>
        <ProjectTitle>
          {title}
          {link ? (
            <a href={link} target="_blank">
              <Link />
            </a>
          ) : null}
          {git ? (
            <a href={git} target="_blank">
              <GitLogo />
            </a>
          ) : null}
        </ProjectTitle>
        <ProjectContents>{explain}</ProjectContents>
      </ProjectExplain>
    </StyledProject>
  );
}
const StyledProject = styled.div`
  width: 540px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.theme.bg_con};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    // 768 ~ 1024 ~ 1200
    width: 450px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    position: unset;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 768px) {
    position: unset;
    margin: 0 auto;
    margin-bottom: 30px;
    width: 100%;
  }
`;
const ImgArea = styled.div`
  overflow: hidden;
  border: 1px solid lightgray;
  border-radius: 20px;

`;
const StyledImg = styled.img`
  width: 100%;
  opacity: 80%;

  &:hover{
    scale: 1.1;
    cursor: pointer;
  }
`;
const ProjectExplain = styled.div`
  padding: 20px;
  height: 100%;
`;
const ProjectTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  & > a{
    margin-left: 10px;
  }
`;
const ProjectContents = styled.p`
  white-space: pre-wrap;
  line-height: 1.5;
`;
const GitLogo = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url(${props => props.theme.git});
  background-size: cover;
  background-position: center;
`;

export default Project;
