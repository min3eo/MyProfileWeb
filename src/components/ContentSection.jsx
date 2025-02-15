import styled from "styled-components";

const ContentSection = () => {
  return (
    <ContentContainer>
      <Column>
        <SectionTitle>Newsfeed</SectionTitle>
        <Image src="/assets/sample1.jpg" />
      </Column>
      <Column>
        <SectionTitle>New In</SectionTitle>
        <Image src="/assets/sample2.jpg" />
      </Column>
      <Column>
        <SectionTitle>Coming Soon</SectionTitle>
        <TextBox>
          <h3>판매 예정 상품 안내</h3>
          <p>곧 출시될 새로운 프로젝트를 기대해주세요.</p>
        </TextBox>
      </Column>
    </ContentContainer>
  );
};

export default ContentSection;

const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  gap: 20px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const TextBox = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;
