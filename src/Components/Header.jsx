import React from "react";
import { styled } from "styled-components";
import BioData from "./BioData";
import Rohit from "../assests/main.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
const Header = () => {
  return (
    <Wrapper id="home">
      <div className="container">
        <p className="greet">Hello, i'm</p>
        <h6 className="name">Rohit Bhatt</h6>
        <p className="designation">Full Stack Developer</p>
        <BioData />
      </div>
      <div className="img">
        <img alt="Rohit" src={Rohit}></img>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
          <BsLinkedin className="socialCom" />
        </a>
        <a href="https://github.com/Mariobuddy">
          <FaGithubSquare className="socialCom" />
        </a>
        <a href="https://www.instagram.com/https_rohit18/">
          <FaInstagramSquare className="socialCom" />
        </a>
      </div>
      <p className="scroll">Scroll Down</p>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 74rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .container {
    margin-top: 10rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .designation {
      color: #8e8484;
      font-size: 2rem;
      position: relative;
    }

    .greet {
      color: #ffffff;
      font-size: 2rem;
    }

    .name {
      color: #ffffff;
      font-size: 5rem;
    }
  }

  .img {
    img {
      width: 30rem;
      height: 40rem;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      box-shadow: 2px 2px 22px 4px #4c4b4b;
    }
  }

  .social {
    position: absolute;
    bottom: 5rem;
    left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      .socialCom {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #0e81d9;
        cursor: pointer;
      }
    }
  }

  .scroll {
    color: #0e81d9;
    transform: rotate(90deg);
    position: absolute;
    bottom: 9rem;
    right: 5rem;
    font-size: 1.5rem;
  }
`;
