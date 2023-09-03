import React from 'react'
import { styled } from 'styled-components';
import TestiData from './TestiData';

const Testimonial = () => {
  return (
    <Wrapper>
        <p className="p1">Review From Clients</p>
      <h5 className="h51">Testimonials</h5>
      <TestiData/>

    </Wrapper>
  )
}

export default Testimonial;

const Wrapper=styled.div`
  height: 70vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
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