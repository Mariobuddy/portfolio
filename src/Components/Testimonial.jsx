import React from "react";
import { styled } from "styled-components";
import TestiData from "./TestiData";
import Sagar from "../assests/L1.jpg";
import Kishor from "../assests/L2.jpg";
import Aniket from "../assests/L3.jpg";

const Testimonial = () => {
  let dataOne = [
    {
      data: "Your exceptional web development skills have transformed our digital presence and significantly contributed to our success. Your ability to take our ideas and turn them into functional, beautiful websites is truly remarkable.",
      name: "Sagar Kushwaha",
      image: Sagar,
    },
    {
      data: "Your UI/UX design work is nothing short of outstanding! Your keen eye for aesthetics and user-centered approach consistently result in visually stunning and highly intuitive interfaces.",
      name: "Kishor Bhatt",
      image: Kishor,
    },
    {
      data: "Your proficiency with the MERN stack is absolutely remarkable! Your ability to seamlessly navigate and leverage MongoDB, Express.js, React, and Node.js to create robust, scalable, and cutting-edge web applications is truly impressive.",
      name: "Aniket Parmar",
      image: Aniket,
    },
  ];

  return (
    <Wrapper>
      <p className="p1">Review From Clients</p>
      <h5 className="h51">Testimonials</h5>
      <TestiData data={dataOne} />
    </Wrapper>
  );
};

export default Testimonial;

const Wrapper = styled.div`
  height: fit-content;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  .p1 {
    font-size: 1.4rem;
    text-align: center;
  }

  .h51 {
    font-size: 2.8rem;
    text-align: center;
    color: #0e81d9;
  }
`;
