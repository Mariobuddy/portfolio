import React from "react";
import { styled } from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

const BoxDetail = ({ data, dataType, dataColor, dataFont }) => {
  return (
    <Wrapper style={{ backgroundColor: dataColor }}>
      <h5 style={{ color: dataFont }}>{dataType}</h5>
      <div className="container1">
        {data.map((val, i) => {
          return (
            <div className="innerDiv" key={i}>
              <BsCheckCircleFill className="logo" style={{ color: dataFont }} />
              <div className="valDiv">
                <p className="pone">{Object.keys(val)}</p>
                <p className="ptwo">{Object.values(val)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BoxDetail;

const Wrapper = styled.div`
  width: 38vw;
  height: inherit;
  border-radius: 2rem;
  box-shadow: 2px 2px 8px 4px #4a4747;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h5 {
    text-align: center;
    font-size: 2rem;
    margin-top: 3rem;
  }
  .container1 {
    margin-top: 4rem;
    width: 30vw;
    height: 35rem;
    margin-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
    padding-right: 2rem;

    .innerDiv {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;

      .logo {
        font-size: 1.5rem;
        margin: 0.5rem 1rem 0rem 6rem;
      }

      .valDiv {
        .pone {
          font-size: 1.6rem;
          margin-right: 5rem;
          margin-bottom: 1rem;
        }
        .ptwo {
          font-size: 1.3rem;
          margin-right: 5rem;
          color: #beb5b5;
        }
      }
    }
  }

  &:hover {
    box-shadow: 2px 2px 12px 8px #4a4747;
  }
`;
