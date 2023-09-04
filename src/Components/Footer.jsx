import React from "react";
import { styled } from "styled-components";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <h4>Rohit Bhatt</h4>
      <div className="logos">
        <div className="l1">
          <a href="rf">
            <AiOutlineInstagram className="logo" />
          </a>
        </div>
        <div className="l1">
          <a href="dd">
            <AiOutlineTwitter className="logo" />
          </a>
        </div>
        <div className="l1">
          <a href="g">
            <FaFacebook className="logo" />
          </a>
        </div>
      </div>
      <p>@MARIO Tutorials.All rights reserved</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #0e81d9;
  height: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  h4 {
    font-size: 2rem;
    color: #ffffff;
  }

  .logos {
    display: flex;

    .l1 {
      background-color: black;
      border-radius: 0.5rem;
      padding: 0.5rem 0.7rem;
      margin-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        color: #ffffff;
        font-size: 1.5rem;

        a {
          color: #ffffff;
        }
      }
    }
  }
  p {
    color: #ffffff;
    font-size: 1.2rem;
  }
`;
