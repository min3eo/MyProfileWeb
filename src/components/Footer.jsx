import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Minseo. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: #d6d6c5;
  border-top: 1px solid #ddd;
`;
