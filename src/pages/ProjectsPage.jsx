import styled, { keyframes } from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaGithub } from "react-icons/fa";

import MogazoaLogo from "@/assets/mogazoa.svg";
import RollingLogo from "@/assets/rolling.svg";
import TheJulgeLogo from "@/assets/thejulge.svg";

const projects = [
  {
    name: "모가조아",
    image: MogazoaLogo,
    link: "https://mogazoa-418.vercel.app/",
    github: "https://github.com/Team18-Mogazoa/MOGAZOA",
    period: "2024.05 ~ 2024.06",
    description: "음악, 식당, 영화, 여행지, 전자기기, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼",
  },
  {
    name: "롤링",
    image: RollingLogo,
    link: "https://rolling-paper-24.netlify.app",
    github: "https://github.com/mun-jihye/rolling-paper-app",
    period: "2024.02 ~ 2024.03",
    description: "평소 고마웠던 지인들에게 마음을 표현하고 전달 해 볼 수 있는 플랫폼",
  },
  {
    name: "더줄게",
    image: TheJulgeLogo,
    link: "https://github.com/Team18-The-Julge/The-Julge",
    github: "https://github.com/Team18-The-Julge/The-Julge",
    period: "2024.4 ~ 중단",
    description: "사장님은 알바, 알바는 일자리를 쉽게 구할 수 있도록 만든 Next 프로젝트",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.Content>
          <S.ProjectsGrid>
            {projects.map((project, index) => (
              <S.ProjectCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <S.ImageContainer>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <S.ProjectImage src={project.image} alt={project.name} />
                  </a>
                </S.ImageContainer>
                <S.ProjectInfo>
                  <S.ProjectTitle>{project.name}</S.ProjectTitle>
                  <S.ProjectPeriod>• {project.period}</S.ProjectPeriod>
                  <S.ProjectDescription>{project.description}</S.ProjectDescription>
                  <S.GithubButton href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </S.GithubButton>
                </S.ProjectInfo>
              </S.ProjectCard>
            ))}
          </S.ProjectsGrid>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
};

export default ProjectsPage;

const fadeInUp = keyframes`
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
    min-height: 100vh;
    background: #eae9cf;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 100px;

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

  Content: styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: -80px;
  `,

  ProjectsGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    max-width: 1000px;

  `,

ProjectCard: styled.div`
background: transparent;
border-radius: 10px;
transition: all 0.3s ease-in-out;
animation: ${fadeInUp} 0.6s ease-out forwards;
opacity: 0;

background-color: #d1d0b9;
border-radius: 12px;
position: relative; /* 위치 고정 */

&:hover {
  transform: scale(1.08); /* 확대 + 회전 */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15); /* 그림자 */
  filter: brightness(1.05); /* 배경 살짝 밝게 */
}
`,

  ImageContainer: styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
  `,

  ProjectImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  `,

  ProjectInfo: styled.div`
    padding: 15px;
    text-align: left;
  `,

  ProjectTitle: styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  `,

  ProjectPeriod: styled.p`
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
    font-weight: 600;
  `,

  ProjectDescription: styled.p`
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
    font-weight: 800;
  `,

  GithubButton: styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    background: #c3c6af;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #575f45;
    }

    svg {
      font-size: 18px;
    }
  `,
};
