import styled, { keyframes } from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiRedux, SiTailwindcss, SiStyledcomponents, SiSass } from "react-icons/si";

const stacks = [
  { name: "React", icon: <FaReact className="icon react" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="icon nextjs" /> },
  { name: "TypeScript", icon: <SiTypescript className="icon typescript" /> },
  { name: "Redux", icon: <SiRedux className="icon redux" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="icon tailwind" /> },
  { name: "Styled-Components", icon: <SiStyledcomponents className="icon styled-components" /> },
  { name: "SASS", icon: <SiSass className="icon sass" /> },
];

const StacksPage = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.Content>
          <S.StackGrid>
            {stacks.map((stack, index) => (
              <S.StackItem key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                {stack.icon}
                <span>{stack.name}</span>
              </S.StackItem>
            ))}
          </S.StackGrid>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
};

export default StacksPage;

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
    height: 100vh;
    background: #eae9cf;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: visible;
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
    margin-top: 20px;
  `,

  StackGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 25px;
    max-width: 800px;
    margin: 0 auto;
  `,

  StackItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background: #eaebdc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    opacity: 0;
    animation: ${fadeInUp} 0.6s ease-out forwards;

    .icon {
      font-size: 40px;
      margin-bottom: 10px;
      transition: transform 0.3s ease-in-out;
    }

    .react { color: #61dafb; }
    .nextjs { color: black; }
    .typescript { color: #3178c6; }
    .redux { color: #764abc; }
    .tailwind { color: #06b6d4; }
    .styled-components { color: #db7093; }
    .sass { color: #cc6699; }

    &:hover {
      transform: scale(1.1);
    }
    &:hover .icon {
      transform: rotate(10deg);
    }

    span {
      font-size: 14px;
      font-weight: bold;
    }
  `,
};
