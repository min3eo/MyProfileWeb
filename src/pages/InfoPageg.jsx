import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const InfoPage = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <S.Container>
        <Header />
        <S.BackgroundAnimation />
        <S.CarouselContainer>
          <Slider {...settings}>
            {aboutCards.map((card, index) => (
              <S.Card key={index}>
                <S.Title>{card.title}</S.Title>
                <S.Description>{card.description}</S.Description>
              </S.Card>
            ))}
          </Slider>
        </S.CarouselContainer>
      </S.Container>
      <Footer />
    </>
  );
};

export default InfoPage;

// ✅ 카드 데이터
const aboutCards = [
  {
    title: 'ℹ️ 사이트 참고 사항',
    description:
      '이 사이트는 유니클로 공식 홈페이지 디자인을 참고하여 만들었습니다.\n\n최신 업데이트: 2025년 2월 18일',
  },
  {
    title: '💐 소개',
    description:
      '💕 좋아하는 것\n옷 쇼핑, 노래 듣기, 카페 탐방\n\nMBTI는 INTP입니다!',
  },
  {
    title: '🖥️ 개발자 기본 정보',
    description:
      '컴퓨터 공학부 3학년 재학\n서울 거주\n\n프론트엔드 개발에 관심이 많아요!',
  },
  {
    title: '💼 현재 과정',
    description:
      'Next를 공부하고 있어요!\n\n 어떤 것이 최적화 / 클린 코드를 잘 작성할 수 있는지 알아가 보고 있어요',
  },
  {
    title: '🎯 개발 목표',
    description:
      '프론트와와 백을 다 아우르는 사용자 경험 중심의 개발\n\n애니메이션 & 인터랙션 향상\n',
  },
  {
    title: '🚀 기술 스택',
    description:
      'React, Next.js, TypeScript, Styled-Components, Redux 등\n\n기술 공부 중!',
  },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bgAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const S = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180px;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0)
      );
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 450px;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0)
      );
    }
  `,

  BackgroundAnimation: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #e7e7c0, #dbdac2, #e8e4cf, #d4d2a5);
    background-size: 400% 400%;
    z-index: -1;
    animation: ${bgAnimation} 12s ease infinite;
  `,

  CarouselContainer: styled.div`
    width: 90%;
    max-width: 1250px;
    padding: 40px 20px;

    .slick-list {
      padding: 0 30px;
    }

    .slick-dots {
      bottom: -50px;
    }
  `,

  Card: styled.div`
    background: rgba(255, 255, 255, 0.15);
    padding: 40px; 
    border-radius: 12px;
    border: 2px solid rgba(64, 84, 15, 0.15);
    text-align: left;
    backdrop-filter: blur(15px);
    animation: ${fadeIn} 1s ease-out;
    margin: 0 20px; 

   
    @media (max-width: 768px) {
      margin: 0 10px;
      padding: 30px;
    }
  `,

  Title: styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 15px;
  `,

  Description: styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: #000000;
    font-weight: 300;
    white-space: pre-line;
  `,
};
