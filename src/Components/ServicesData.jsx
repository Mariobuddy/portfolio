import React from "react";
import { styled } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

const ServicesData = ({ data, head }) => {
  return (
    <Wrapper>
      <div className="innerDiv">
        <h5>{head}</h5>
      </div>
      <div className="des">
        {data &&
          data.map((val, i) => {
            return (
              <div className="info" key={i}>
                <AiOutlineCheck className="logo" />
                <p>{val}</p>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default ServicesData;

const Wrapper = styled.div`
  width: 30rem;
  height: fit-content;
  border: 1px solid var(--font);
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: #0a114d;
  transition: all 0.2s ease-out;

  .innerDiv {
    background-color: #0e81d9;
    width: inherit;
    height: 6rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h5 {
      color: black;
      font-size: 1.5rem;
    }
  }

  .des {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem 0rem 3rem 0rem;
    .info {
      display: flex;
      width: 80%;
      margin-top: 1.5rem;

      .logo {
        font-size: 2rem;
        margin-right: 0.5rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }

  &:hover{
    background-color: transparent;
    box-shadow: 2px 2px 12px 8px #4a4747;
  }
`;
