import styled, { keyframes } from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import LandingPageText from "@/utils/LandingPageText";
import CenterImageSrc from "@/assets/main-image.png"; 

const LandingPage = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.Section>
          <S.CenterImage src={CenterImageSrc} alt="Center Image" />
          <S.TextSection>
            <S.Title>{LandingPageText.title}</S.Title>
            <S.Description>{LandingPageText.description}</S.Description>
          </S.TextSection>
        </S.Section>
      </S.Container>
      <Footer />
    </>
  );
};

export default LandingPage;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const S = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    background: #eae9cf;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 450px;
      height: 100%;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
    }
  `,

  Section: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 180px;
    height: calc(100vh - 80px);
  `,

  CenterImage: styled.img`
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 50%;
    max-width: 780px;
    height: auto;
    z-index: 1; 
  `,

  TextSection: styled.div`
    position: absolute;
    left: 180px;
    bottom: 230px;
    align-items: flex-start;
    gap: 10px;
    max-width: 375px;
    color: black;
    display: flex;
    flex-direction: column;
    z-index: 2; 

    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
  `,

  Subtitle: styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 18px;
  `,

  Title: styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
  `,

  Description: styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 500;
  `,
};
