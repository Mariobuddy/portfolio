import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const TestiData = ({ data }) => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="main"
      >
        {data.map((val, i) => {
          return (
            <SwiperSlide className="innerDiv" key={i}>
              <img src={val.image} alt="pic"></img>
              <h5>{val.name}</h5>
              <p>{val.data}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default TestiData;

const Wrapper = styled.div`
  .swiper-pagination-clickable .swiper-pagination-bullet {
    background-color: #ffffff;
  }

  .main {
    width: 60rem;
    padding-bottom: 5rem;
    .innerDiv {
      width: 60rem;
      height: 30rem;
      background-color: #3309eeb5;
      border-radius: 2rem;
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 6rem 0rem;

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 5px solid #0e81d9;
      }

      h5 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.2rem;
        width: 60%;
      }
    }
  }
  @media (min-width: 390px) and (max-width: 768px) {
    .main {
      width: 90vw;
      .innerDiv {
        width: inherit;
        height: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 2rem 0rem;

        img {
        }

        h5 {
        }

        p {
          width: 90%;
        }
      }
    }
  }
`;
