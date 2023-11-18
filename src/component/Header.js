import React from "react";
import styled from 'styled-components';


const Sun = ({ size = 22 }) => (
  <StyledSun
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </StyledSun>
);

const Moon = ({ size = 22 }) => (
  <StyledMoon
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </StyledMoon>
);

const StyledSun = styled.svg`
  position: absolute;
  left: 3px;
  top: 2px;
  stroke: ${props => props.theme.color};
  visibility: ${props => props.theme.mode === 'light' ? 'visible' : "hidden"};
  opacity:${props => props.theme.mode === 'light' ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;
const StyledMoon = styled.svg`
  position: absolute;
  right: 3px;
  top: 2px;
  stroke: ${props => props.theme.color};
  visibility: ${props => props.theme.mode === 'dark' ? 'visible' : "hidden"};
  opacity:${props => props.theme.mode === 'dark' ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

function Header(props) {
  const { themeMode, setThemeMode } = props;
  return (
    <StyledHeader>
      <StyledNav>
        <div>
          <NavImg onClick={() => window.location.replace('/')} />
        </div>
        <NavRight>
          <NavUl>
            <NavLi onClick={()=>window.location.replace('#about')}>About</NavLi>
            <NavLi onClick={()=>window.location.replace('#projects')}>Projects</NavLi>
            <NavLi onClick={()=>window.location.replace('#contact')}>Contact</NavLi>
          </NavUl>
          <NavDark>
            <DarkToggle onClick={() => {
              setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
              window.localStorage.setItem("themeMode", themeMode === 'dark' ? 'light' : 'dark')
            }}>
              <Sun />
              <Moon />
            </DarkToggle>
          </NavDark>
        </NavRight>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${props => props.theme.bg_1};
`;

const StyledNav = styled.div`
  width: 1140px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 964px;
  }
    @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 708px;
  }
  @media screen and (max-width: 768px){
    width: calc(100% - 60px);
    height: 50px;
    margin: 0 30px;
  }
`;
const NavImg = styled.div`
  width: 168px;
  height: 42px;
  background-image: url(${props => props.theme.logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    width: 140px;
    height: 35px;
  }
`;
const NavRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
const NavUl = styled.ul`
  display: flex;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
const NavLi = styled.li`
  margin-left: 50px;
  font-size: 18px;

  &:hover{
    cursor: pointer;
  }
`;
const NavDark = styled.div`
  margin-left: 60px;
`;
const DarkToggle = styled.div`
  width: 60px;
  height: 26px;
  border: 1px solid ${props => props.theme.color};
  border-radius: 20px;
  position: relative;
`;
export default Header;
