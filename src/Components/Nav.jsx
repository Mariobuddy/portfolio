import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { styled } from "styled-components";

const Nav = () => {
  let [activeNav, setAvtiveNav] = useState("#home");
  return (
    <Wrapper>
      <nav>
        <a
          href="#home"
          className={activeNav === "#home" ? "active" : ""}
          onClick={() => {
            setAvtiveNav("#home");
          }}
        >
          <AiOutlineHome className="logo" />
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={() => {
            setAvtiveNav("#about");
          }}
        >
          <AiOutlineUser className="logo" />
        </a>
        <a
          href="#experience"
          className={activeNav === "#experience" ? "active" : ""}
          onClick={() => {
            setAvtiveNav("#experience");
          }}
        >
          <BiBook className="logo" />
        </a>
        <a
          href="#services"
          className={activeNav === "#services" ? "active" : ""}
          onClick={() => {
            setAvtiveNav("#services");
          }}
        >
          <RiServiceLine className="logo" />
        </a>
        <a
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={() => {
            setAvtiveNav("#contact");
          }}
        >
          <BiMessageSquareDetail className="logo" />
        </a>
      </nav>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  position: fixed;
  width: 28rem;
  height: 5rem;
  bottom: 3rem;
  left: 40.8%;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
      transition: all 0.2s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;
