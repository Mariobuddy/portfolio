import React from "react";
import { styled } from "styled-components";
import BoxDetail from "./BoxDetail";

const Experience = () => {
  let frontOne = [
    { HTML: "Experienced" },
    { CSS: "Experienced" },
    { Javascript: "Experienced" },
    { React: "Intermediate" },
    { Angular: "Intermediate" },
    { Fabricjs: "Basic" },
    { Typescript: "Basic" },
  ];
  let backOne = [
    { Nodejs: "Intermediate" },
    { Expressjs: "Intermediate" },
    { MongoDB: "Intermediate" },
    { Mongoose: "Basic" },
  ];
  return (
    <Wrapper id="experience">
      <p className="p1">What Skills I Have</p>
      <h5 className="h51">My Experience</h5>
      <div className="container">
        <BoxDetail
          data={frontOne}
          dataType={"Frontend Development"}
          dataColor={"transparent"}
          dataFont={"#0e81d9"}
        />
        <BoxDetail
          data={backOne}
          dataType={"Backend Development"}
          dataColor={"#0e81d9"}
          dataFont={"#FFFFFF"}
        />
      </div>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled.div`
  height: fit-content;
  color: #ffffff;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .p1 {
    font-size: 1.4rem;
    text-align: center;
  }

  .h51 {
    font-size: 2.8rem;
    text-align: center;
    color: #0e81d9;
  }

  .container {
    width: 80vw;
    height: 50rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;

    .front {
      width: 38vw;
      height: inherit;
      border-radius: 2rem;
      box-shadow: 2px 2px 8px 4px #4a4747;
    }

    .back {
      width: 38vw;
      height: inherit;
      border-radius: 2rem;
      background: #0a114d;
      box-shadow: 2px 2px 8px 4px #4a4747;
    }
  }
`;
