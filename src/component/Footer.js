import React from 'react';
import styled from 'styled-components';

function Footer(){
  return(
    <StyledFooter>
      <FooterContent>
        <p>COPYRIGHT DUYAAN. ALL RIGHTS RESERVED.</p>
        <p>본 사이트는 개인 포트폴리오 사이트로 제작되어 상업적 목적이 아닙니다.</p>
      </FooterContent>
    </StyledFooter>
  );
}
const StyledFooter = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bg_2};
`;
const FooterContent = styled.div`
  font-size: 16px;
  text-align: center;
  padding: 50px 0;
  line-height: 30px;
  @media screen and (max-width: 768px){
    font-size: 12px;
  }
`;
export default Footer;