import React from "react";
import styled from "styled-components";
import SNS from "./SNS";
import IntersectionObserver from "../IntersectionObserver";

function Contact() {
  return (
    <StyledContact id="contact">
      <Article>
        <ContactTitle>
          <IntersectionObserver>
            <Title>Contact</Title>
          </IntersectionObserver>
        </ContactTitle>
        <IntersectionObserver>
          <ContactContent>
            <SNS
              img="./images/naver_logo.png"
              title="Naver"
              content="Email : k99endus@naver.com"
            ></SNS>
            <SNS
              img="./images/kakaotalk_logo.png"
              title="Kakao"
              link="https://open.kakao.com/o/sjXBWYre"
              content="카카오톡 오픈채팅 >"
            ></SNS>
            <SNS
              img="./images/tistory_logo.png"
              title="Tistory"
              link="https://duyaan.tistory.com"
              content="Tistory로 이동하기 >"
            ></SNS>
            <SNS
              img="./images/github_logo.png"
              title="GitHub"
              link="https://github.com/rkddusen"
              content="GitHub으로 이동하기 >"
            ></SNS>
            <SNS
              img="./images/instagram_logo.png"
              title="Instagram"
              link="https://www.instagram.com/duyeon_0915"
              content="Instagram으로 이동하기 >"
            ></SNS>
          </ContactContent>
        </IntersectionObserver>
      </Article>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  width: 100%;
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
const ContactTitle = styled.div`
  padding: 120px 0;
`;
const Title = styled.p`
  text-align: center;
  font-size: 40px;
`;
const ContactContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -100px;
  margin-bottom: 100px;

  @media screen and (min-width: 1024px) and (max-width: 1200px){
    margin-top: -80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    margin-top: -60px;
  }
  @media screen and (max-width: 768px){
    margin-top: -30px;
  }
`;

export default Contact;
