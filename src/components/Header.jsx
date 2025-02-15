import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '@/assets/logo.png';
import { FaInstagram, FaGithub } from 'react-icons/fa';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const underlineRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const activeItem = document.querySelector('.active');
    if (activeItem) updateUnderline(activeItem, false);

    const handleResize = () => {
      const activeItem = document.querySelector('.active');
      if (activeItem) updateUnderline(activeItem, false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname]);

  const handleClick = (event, path, index) => {
    event.preventDefault();
    const currentIndex = menuItemsRef.current.findIndex(item =>
      item.classList.contains('active')
    );

    if (currentIndex === index) return;

    const step = currentIndex < index ? 1 : -1;

    let i = currentIndex;
    const moveUnderline = () => {
      if (i !== index) {
        i += step;
        updateUnderline(menuItemsRef.current[i], true);
        setTimeout(moveUnderline, 250);
      } else {
        navigate(path);
      }
    };

    moveUnderline();
  };

  const updateUnderline = (element, animate = true) => {
    if (!underlineRef.current) return;
    const { offsetLeft, offsetWidth } = element;

    requestAnimationFrame(() => {
      underlineRef.current.style.transition = animate
        ? 'transform 0.3s ease-out, width 0.2s ease-in-out'
        : 'none';
      underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
      underlineRef.current.style.width = `${offsetWidth}px`;
    });
  };

  const handleLogoClick = () => {
    setShowLoading(true);
    setTimeout(() => {
      navigate('/');
      setShowLoading(false);
    }, 2000);
  };

  return (
    <>
      {showLoading && (
        <S.LoadingScreen>
          <S.LoadingLogo src={Logo} alt="Logo" />
        </S.LoadingScreen>
      )}
      <S.Container>
        <S.Logo onClick={handleLogoClick}>
          <img src={Logo} alt="Logo" height={45} />
        </S.Logo>
        <S.Menu>
          <S.Underline ref={underlineRef} />
          {['/', '/stacks', '/projects', '/info'].map((path, index) => (
            <S.MenuItem
              key={path}
              ref={el => (menuItemsRef.current[index] = el)}
              className={getPage(path)}
              onClick={e => handleClick(e, path, index)}
            >
              {['HOME', 'STACKS', 'PROJECTS', 'INFO'][index]}
            </S.MenuItem>
          ))}
        </S.Menu>
        <S.Icons>
          <a
            href="https://www.instagram.com/min_3eo_?igsh=eHczMHR4eHB1ZmJo&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/min3eo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </S.Icons>
      </S.Container>
    </>
  );
}

const getPage = path => (window.location.pathname === path ? 'active' : '');

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.5);
  }
`;

const fadeInShadow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.5);
  }
`;

const S = {
  LoadingScreen: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    z-index: 200000;
    animation: ${fadeOut} 0.5s 1.5s forwards;
  `,

  LoadingLogo: styled.img`
    z-index: 200001;
    border:none;
    border-radius: 18px;
    width: 100px;
    height: 100px;
    animation: ${fadeIn} 0.5s forwards;
    box-shadow: 20px 50px 20px 50px rgba(0, 0, 0, 1);
    animation: ${fadeInShadow} 1s ease-in-out forwards;
  `,

  Container: styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 40px 320px;
    background: transparent;
    position: fixed;
    z-index: 1000;
    top: 0;
  `,
  Logo: styled.div`
    font-size: 20px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  `,
  Menu: styled.div`
    display: flex;
    position: relative;
    gap: 80px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  `,
  MenuItem: styled.div`
    font-family: Pretendard;
    font-weight: bold;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    padding-bottom: 10px;
    position: relative;
  `,
  Underline: styled.span`
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    background: #fff;
    filter: drop-shadow(2px 1px 1px rgba(0, 0, 0, 0.5));
  `,
  Icons: styled.div`
    display: flex;
    gap: 25px;
    a {
      color: white;
      font-size: 26px;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #797777;
    }
  `,
};

export default Header;
