import React from "react";
import { styled } from "styled-components";

const Box = ({ icon, tag, des }) => {
  return (
    <Wrapper>
      {icon}
      <div className="info">
        <h6>{tag}</h6>
        <p>{des}</p>
      </div>
    </Wrapper>
  );
};

export default Box;

const Wrapper = styled.div`
  background-color: #0a114d;
  border-radius: 2rem;
  height: 16rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;


  .info {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    h6 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
      color: #cec9c9;
    }
  }
  &:hover{
    background-color: #162399;
  }
`;
