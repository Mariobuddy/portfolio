import React from "react";
import { styled } from "styled-components";
import Rohit from "../assests/main2.jpg";
import Box from "./Box";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const About = () => {
  return (
    <Wrapper id="about">
      <p className="p1">Get To Know</p>
      <h5 className="h51">About Me</h5>
      <div className="container">
        <div className="img1">
          <div className="bg"></div>
          <img src={Rohit} alt="Rohit" />
        </div>
        <div className="detail">
          <div className="box">
            <Box
              icon={<FaMedal className="logo" />}
              tag={"Experience"}
              des={"3+ Months Working"}
            />
            <Box
              icon={<MdComputer className="logo" />}
              tag={"Knowledge"}
              des={"8+ Skills"}
            />
            <Box
              icon={<AiFillFolderOpen className="logo" />}
              tag={"Projects"}
              des={"15+ Completed"}
            />
          </div>
          <div className="info">
            <p>
              Since childhood, I have seen various inventions in technology and
              tools which triggered my curiosity to learn more about tech and
              how their application works in the real world. While I was a
              student in school, I got attracted to coding and was always eager
              to know about new technologies. I developed strong fondness for
              web development while trying my hands at it during the pandemic.
              so I decided it was high time to learn it. Loved coding and
              creating new products. Got hands-on experience in JavaScript,
              HTML5 , CSS , React , Angular , Fabric.js , Nodejs & Mongodb while
              working on various collaborative projects. A good relationship
              with JavaScript, Data structures and algorithms is fun. Would like
              to create more value through my work as a full stack web developer
              and contribute to things which are user-friendly. If you would
              like to know more about me, reach out to me on
              rohitbuatt9755@gmail.com
            </p>
            <Button>
              <Anch1 href="#contact">Let's Talk</Anch1>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  height: fit-content;
  color: #ffffff;
  padding-top: 8rem;

  .p1 {
    font-size: 1.4rem;
    text-align: center;
  }

  .h51 {
    font-size: 2.8rem;
    text-align: center;
    color: #0e81d9;
  }

  .logo {
    font-size: 2.5rem;
    color: #0e81d9;
  }

  .container {
    display: flex;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 5rem;

    .img1 {
      position: relative;
      .bg {
        background-color: #0e81d9;
        width: 38rem;
        height: 38rem;
        border-radius: 2rem;
        position: absolute;
      }
      img {
        width: 38rem;
        height: 38rem;
        border-radius: 2rem;
        transform: rotate(6deg);
        cursor: pointer;
        z-index: 8;
        transition: all 0.2s ease;

        &:hover {
          transform: rotate(0deg);
        }
      }
    }
    .detail {
      width: 60rem;
      .box {
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .info {
        margin-top: 2rem;
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const Anch1 = styled.a`
  color: #ffffff;
`;

const Button = styled.button`
  background-color: #0e81d9;
  border: 2px solid #0e81d9;
  outline: none;
  margin-top: 2rem;
  padding: 1rem 1.2rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
  }

  &:hover ${Anch1} {
    color: #0e81d9;
  }
`;
