import React from 'react'
import { styled } from 'styled-components';
import Sagar from '../assests/L1.jpg';

const TestiData = () => {
  return (
    <Wrapper>
    <img src={Sagar} alt='Rohit'></img>
    <h5>Sagar Kushwaha</h5>
    <p>"Your exceptional web development skills have transformed our digital presence and significantly contributed to our success. Your ability to take our ideas and turn them into functional, beautiful websites is truly remarkable. </p>
    </Wrapper>
  )
}

export default TestiData;

const Wrapper=styled.div`
width: 60rem;
height: 30rem;
background-color: #3309eeb5;
border-radius: 2rem;
margin-top: 5rem;
display: flex;
flex-direction: column;
align-items: center;

img{
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 5px solid #0e81d9;
}

h5{
font-size: 1.6rem;
}

p{
font-size: 1.2rem;
}

`;