import React from "react";
import { styled } from "styled-components";
import P1 from "../assests/p1.jpg";
import P2 from "../assests/p2.jpg";
import P3 from "../assests/p3.png";

const Portfolio = () => {
  return (
    <Wrapper>
      <p className="p1">My Recent Work</p>
      <h5 className="h51">Portfolio</h5>
      <div className="project">
        <div className="main">
          <img alt="project" className="pImage" src={P1}></img>
          <p>Movie Seaching Website</p>
        </div>
        <div className="main">
          <img alt="project" className="pImage" src={P2}></img>
          <p>Online Music Website</p>
        </div>
        <div className="main">
          <img alt="project" className="pImage" src={P3}></img>
          <p>Ecommerce Website</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.section`
  height: fit-content;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0rem;
  padding: 4rem 0rem;

  .p1 {
    font-size: 1.4rem;
    text-align: center;
  }

  .h51 {
    font-size: 2.8rem;
    text-align: center;
    color: #0e81d9;
  }

  .project {
    display: flex;
    margin-top: 5rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .main {
      background-color: #0a114d;
      border-radius: 2rem;
      padding: 5rem 5rem 4rem 5rem;
      transition: all 0.2s ease-in-out;

      .pImage {
        height: 30rem;
        width: 30rem;
      }
      p {
        text-align: center;
        font-size: 1.4rem;
        margin-top: 1rem;
      }

      &:hover {
        padding: 5.2rem 5.2rem 4.2rem 5.2rem;
        box-shadow: 2px 2px 8px 4px #4a4747;
        background-color: #172393;
      }
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    .p1 {
    }

    .h51 {
    }

    .project {
      flex-direction: column;
      .main {
        border-radius: 2rem;
        padding: 2rem 2rem 1rem 2rem;
        transition: all 0.2s ease-in-out;
        width: 90vw;
        height: 34rem;
        margin-bottom: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .pImage {
          height: 25rem;
          width: 30rem;
        }
        p {
        }
      }
    }
  }
`;
