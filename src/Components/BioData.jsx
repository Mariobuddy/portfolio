import React from "react";
import { styled } from "styled-components";
import CV from "../assests/CV.pdf";
import { Link } from "react-scroll";

const BioData = () => {
  return (
    <Wrapper>
      <Button>
        <Anch href={CV} download>
          Download CV
        </Anch>
      </Button>
      <Link to="contact" spy={true} smooth={true}>
        <Button1>Let's Talk</Button1>
      </Link>
    </Wrapper>
  );
};

export default BioData;

const Wrapper = styled.div``;

const Anch = styled.a`
  color: #0e81d9;
`;

const Button1 = styled.button`
  background-color: #0e81d9;
  outline: none;
  margin-top: 2rem;
  border: 2px solid #0e81d9;
  padding: 1rem 1.2rem;
  border-radius: 0.2rem;
  margin-left: 4rem;
  transition: all 0.2s ease;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #0e81d9;
  }
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  margin-top: 2rem;
  border: 2px solid #0e81d9;
  padding: 1rem 1.2rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover ${Anch} {
    color: #ffffff;
  }
  &:hover {
    background-color: #0e81d9;
  }
`;
