import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { styled, keyframes } from "styled-components";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <Wrapper id="navMain">
      <nav>
        <Link to="home" activeClass="active" spy={true} smooth={true}>
          <AiOutlineHome className="logo" />
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true}>
          <AiOutlineUser className="logo" />
        </Link>
        <Link to="experience" activeClass="active" spy={true} smooth={true}>
          <BiBook className="logo" />
        </Link>
        <Link to="services" activeClass="active" spy={true} smooth={true}>
          <RiServiceLine className="logo" />
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true}>
          <BiMessageSquareDetail className="logo" />
        </Link>
      </nav>
    </Wrapper>
  );
};

export default Nav;

let animation = keyframes`
0%{
bottom: -5rem;
}
100%{
  bottom: 3rem;
}
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  width: 28rem;
  height: 5rem;
  bottom: 3rem;
  left: 40.8%;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear;
  background: linear-gradient(
    13deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  .active {
    background-color: #0e81d9;
    border-radius: 50%;
    padding: 1rem;
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: inherit;

    a {
      color: #c7c3c3;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: #ffffff;
      }
    }
  }
`;
