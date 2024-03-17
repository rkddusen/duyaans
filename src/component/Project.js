import React from "react";
import styled from "styled-components";
import { ProjectsInfoList } from '../utils/ProjectsInfoList';

const Link = ({ size = 25 }) => (
  <StyledSvg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></StyledSvg>
);
const StyledSvg = styled.svg`
  stroke: ${props => props.theme.color};
  margin: 10px;
`;

function Project(props) {
  const { index } = props;
  return (
    <StyledProject>
      <ProjectInfo>
        <Title>
          <ProjectTitle>
            {ProjectsInfoList[index]?.title}
          </ProjectTitle>
          <div>
            {ProjectsInfoList[index]?.link ? (
              <a href={ProjectsInfoList[index]?.link} target="_blank">
                <Link />
              </a>
            ) : null}
            {ProjectsInfoList[index]?.git ? (
              <a href={ProjectsInfoList[index]?.git} target="_blank">
                <GitLogo />
              </a>
            ) : null}
          </div>
        </Title>
        <ImgArea>
          <StyledImg onClick={() => {
              window.open(ProjectsInfoList[index]?.link)
            }}
            src={ProjectsInfoList[index]?.img}
            alt={ProjectsInfoList[index]?.title} />
        </ImgArea>
      </ProjectInfo>
      <ProjectExplain>
        <ExplainBold>{ProjectsInfoList[index]?.projectSize}</ExplainBold>
        <div>{ProjectsInfoList[index]?.role}</div>
        <ExplainBold>사용 기술</ExplainBold>
        <div>
          {ProjectsInfoList[index]?.skill.map((v, i) => (
            <ExplainList key={i}>{v}</ExplainList>
          ))}
        </div>
        <ExplainBold>프로젝트 소개</ExplainBold>
        <div>
          {ProjectsInfoList[index]?.info.map((v, i) => (
            <ExplainList key={i}>{v}</ExplainList>
          ))}
        </div>
        <ExplainBold>프로젝트 목표</ExplainBold>
        <div>
          {ProjectsInfoList[index]?.goal.map((v, i) => (
            <ExplainList key={i}>{v}</ExplainList>
          ))}
        </div>
        <ExplainBold>프로젝트 기능</ExplainBold>
        <div>
          {ProjectsInfoList[index]?.feature.map((v, i) => (
            <ExplainList key={i}>{v}</ExplainList>
          ))}
        </div>
        {ProjectsInfoList[index]?.problem || ProjectsInfoList[index]?.difficult ? (
          <>
            <ExplainBold>문제/해결 or 어려웠던 점</ExplainBold>
            <div>
              {ProjectsInfoList[index]?.problem.map((v, i) => (
                <ExplainProblem key={i}>
                  <ExplainProblemBold>{v.title}</ExplainProblemBold>
                  <p>{v.problem}</p>
                  <ExplainProblemBold>해결</ExplainProblemBold>
                  <p>{v.solve}</p>
                </ExplainProblem>
              ))}
              {ProjectsInfoList[index]?.difficult.map((v, i) => (
                <ExplainProblem key={i}>
                  <ExplainProblemBold>{v.title}</ExplainProblemBold>
                  <p>{v.content}</p>
                </ExplainProblem>
              ))}
            </div>
          </>
        ) : (
          null
        )}
      </ProjectExplain>
    </StyledProject>
  );
}
const StyledProject = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.theme.bg_con};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

`;
const ProjectInfo = styled.div`
  display: flex;
`;
const ImgArea = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid lightgray;
  border-radius: 20px;

`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  white-space: break-spaces;
  text-align: center;
`;
const StyledImg = styled.img`
  width: 100%;
  opacity: 80%;

  &:hover{
    scale: 1.1;
    cursor: pointer;
  }
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
  width: 25px;
  height: 25px;
  background-image: url(${props => props.theme.git});
  background-size: cover;
  background-position: center;
  margin: 10px;
`;

const ProjectExplain = styled.div`
  padding: 20px;
  height: 100%;
  line-height: 1.2;
  white-space: break-spaces;
`;
const ExplainBold = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;
const ExplainList = styled.p`
  &::before{
    content: "-";
    margin: 0 5px;
  }
`;
const ExplainProblem = styled.div`
  margin-bottom: 20px;
`;
const ExplainProblemBold = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export default Project;
