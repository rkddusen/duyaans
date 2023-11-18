import React from "react";
import styled from 'styled-components';

function Main() {
  return (
    <StyledMain>
      <MainImg />
      <MainExplain>
        <MainExplainRe>
          <MainExplainAb>
            <Sentence>Welcome to</Sentence>
            <Sentence>DuYaan's Web</Sentence>
          </MainExplainAb>
        </MainExplainRe>
      </MainExplain>
    </StyledMain>
  );
}
const StyledMain = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const MainImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.theme.main});
  opacity: ${props => props.theme.mode === 'dark' ? '100%' : '20%'};
  /* @media screen and (min-width: 1024px){
    background-image: url(${props => props.theme.main});
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    background-image: url(${props => props.theme.main2});
  }
  @media screen and (max-width: 768px){
    background-image: url(${props => props.theme.main3});
  } */
`;
const MainExplain = styled.div`
  position: absolute;
  width: 1140px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 964px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 708px;
  }
  @media screen and (max-width: 768px){
    width: calc(100% - 60px);
  }
`;
const MainExplainRe = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const MainExplainAb = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0,-50%);
  @media screen and (max-width: 768px){
    transform: translate(0,0);
  }
`;
const Sentence = styled.p`
  font-size: 60px;
  line-height: 1.5;
  letter-spacing: 10px;
  font-weight: 600;

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    font-size: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    font-size: 45px;
  }
  @media screen and (max-width: 768px){
    font-size: 25px;
  }
`;

export default Main;
