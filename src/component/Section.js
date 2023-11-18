import React from "react";
import styled from 'styled-components';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Section() {
  return (
    <StyledSection>
      <StyledArticle>
        <Main></Main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </StyledArticle>
    </StyledSection>
  );
}
const StyledSection = styled.div`
  width: 100%;
`;
const StyledArticle = styled.div`
  position: relative;
  width: 100%;
`;

export default Section;
