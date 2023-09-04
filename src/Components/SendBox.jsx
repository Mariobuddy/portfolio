import React from 'react'
import { styled } from 'styled-components';


const SendBox = ({data}) => {
  return (
   <>
   {data.map((val,i)=>{
    return  <Wrapper key={i}>
    {val.logo}
    <p className='p1'>{val.name}</p>
    <p>{val.send}</p>
    <a href={val.link}>Send a message</a>
   </Wrapper>
   })
   }
   </>
  )
}

export default SendBox;

const Wrapper=styled.div`
background-color: #0a114d;
transition: all 0.2s ease-in;
width: 26rem;
height: 15rem;
border-radius: 2rem;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 2rem 0rem;
margin-bottom: 2rem;

.p1{
font-size: 1.8rem;
}

p{
    font-size: 1.2rem;

}

a{
    color: #0e81d9;
    font-size: 1.4rem;
}

&:hover{
  background-color: #162399;
}
`;