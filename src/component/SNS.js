import React from 'react';
import styled from 'styled-components';

function SNS(props){
  const { img, title, content, link} = props;
  return(
    <StyledSNS>
      <div>
        <SNSImg src={img} alt={title}/>
      </div>
      <SNSDetail>
        <SNSTitle>{title}</SNSTitle>
        <SNSContent>{link ? <SNSLink href={link} target="_blank">{content}</SNSLink> : content}</SNSContent>
      </SNSDetail>
    </StyledSNS>
  );
}

const StyledSNS = styled.div`
  width: 480px;
  height: 180px;
  padding: 20px;

  margin: 0 auto;
  margin-top: 100px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bg_con};

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 400px;
    height: 160px;
    margin-top: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    width: 300px;
    height: 140px;
    margin-top: 60px;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    height: 120px;
    margin-top: 30px;
  }
`;

const SNSImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  
  @media screen and (min-width: 1024px) and (max-width: 1200px){
    width: 70px;
    height: 70px;
  }
  @media screen and (max-width: 1024px){
    width: 50px;
    height: 50px;
  }
`;
const SNSDetail = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const SNSTitle = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;
const SNSContent = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;
const SNSLink = styled.a`
  color: unset;
`;

export default SNS;