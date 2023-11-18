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
        <ProjectsContent><IntersectionObserver>
          <ProjectsList>
            <Project
              style={{ top: "0", left: "0" }}
              img="./images/Kuphil_Web.png"
              title="Kuphil Web"
              explain={`건국대학교 아마추어 오케스트라 동아리의 홈페이지를 만들기 위해 진행된 팀프로젝트입니다. 동아리의 홍보와 졸업생들과의 컨텍을 위해 시작하게 된 프로젝트입니다.\n\n총 4명의 팀원으로 구성되어 있으며 모든 팀원의 프론트엔드 및 백엔드 능력 향상을 위해 기능별로 역할을 나누었습니다. 1년동안 기획, 디자인, 구현의 과정을 마친 후, 실제 배포를 진행하였고, 사용자 평가를 수행하여 현재는 리팩토링 작업에 있습니다.\n\nReact를 공부하기 전에 보다 더 완벽한 JavaScript를 위해 Html, CSS, JavaScript를 사용했습니다. 현재는 React 능력 향상을 위해 React를 사용하는 방향으로 리팩토링 중입니다.`}
              link="http://13.124.56.187:8080"
              git=""
            ></Project>
            <Project
              style={{ top: "200px", right: "0" }}
              img="./images/yorizori.png"
              title="요리조리"
              explain={`건국대학교 졸업프로젝트입니다. 기존 레시피 서비스와는 다른 조회 뿐만 아니라 다양한 방식의 검색, 사용자 맞춤 추천, 레시피 작성의 템플릿, 공유등록 및 식당 조회 등 사용자에게 맞춰진 서비스를 만들고자 했습니다.\n\n총 4명의 팀원으로 구성되어 있으며 기획, 설계 및 테스트는 공통으로 담당했고, 저는 디자인 및 프론트엔드를 담당하게 되었습니다. 6개월의 기획 및 설계를 마치고 나머지 6개월동안 구현 및 테스트를 진행했습니다. 제안서, 설계서, 요구사항 분석서, 구현보고서, 테스트 명세서를 작성해보고, 프론트엔드로서 백엔드 팀원과의 원활한 의사소통을 통해 데이터 통신을 하는 경험을 준 프로젝트입니다.\n\nJavaScript와 React를 사용하여 프론트엔드를 구성했습니다.`}
              link="http://15.165.105.159"
              git=""
            ></Project>
          </ProjectsList></IntersectionObserver><IntersectionObserver>
          <ProjectsList>
            <Project
              style={{ top: "0", left: "0" }}
              img="./images/Color-me.png"
              title="Color, me"
              explain={`GitHub Pages 배포를 시도해보기 위해 진행한 프로젝트입니다. 조합하기를 원하는 색상들을 선택한 후, 선택된 색 조합을 저장하는 프로젝트입니다.\n\n개인 프로젝트이며 Web Storage에 공부하는 계기가 되었습니다.\n\nGitHub Pages가 목표였기 때문에 Html, CSS, JavaScript를 사용했습니다.`}
              link="https://rkddusen.github.io/Color-me"
              git="https://github.com/rkddusen/Color-me"
            ></Project>
            <Project
              style={{ top: "200px", right: "0" }}
              img="./images/colorme(2).png"
              title="Color, me(크롬 확장 프로그램)"
              explain={`GitHub Pages로 배포한 Color, me를 크롬 확장 프로그램으로 배포한 프로젝트입니다. 기능은 동일합니다.\n\n개인 프로젝트이며 하나의 페이지를 구성하는 것 보단 크롬 확장 프로그램으로 배포를 해보면 좋겠다는 의견을 반영했습니다.\n\nGitHub Pages의 Color, me와 동일하게 Html, CSS, JavaScript를 사용했습니다.`}
              link="https://chromewebstore.google.com/detail/color-me/ldcmnbbjcbciolddfffpfghlcgnogacp?hl=ko&utm_source=ext_sidebar"
              git="https://github.com/rkddusen/ColorMe"
            ></Project>
          </ProjectsList></IntersectionObserver>
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
  padding-bottom: 200px;
  @media screen and (min-width: 768px) and (max-width: 1024px){
    padding-bottom: 140px;
  }
  @media screen and (max-width: 768px){
    padding-bottom: 170px;
  }
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
