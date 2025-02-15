import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DH';
    src: url('/fonts/DH.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --font-primary: 'DH', 'Pretendard', "Noto Sans KR", "Nanum Myeongjo", sans-serif;

    --font-size-large: 2.4rem;
    --font-size-medium: 1.6rem;
    --font-size-small: 1.2rem;
    --font-size-extra-small: 1rem;
  }

  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
  }

  html, body {
    font-size: 62.5%;
    line-height: 1.285;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  textarea {
    resize: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  /* 기본 글씨 크기 스타일 */
  h1 {
    font-size: var(--font-size-large);
  }

  h2, h3, h4 {
    font-size: var(--font-size-medium);
  }

  p {
    font-size: var(--font-size-small);
  }

  small {
    font-size: var(--font-size-extra-small);
  }
`;

export default GlobalStyle;
