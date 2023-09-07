import React, { useRef } from "react";
import { styled } from "styled-components";
import SendBox from "./SendBox";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hello");

    emailjs
      .sendForm(
        "service_aelq5wg",
        "template_fascj6b",
        form.current,
        "MqC-gE4u0JaMuzfyN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  let data = [
    {
      logo: <AiOutlineMail style={{ fontSize: "2.5rem" }} />,
      name: "Email",
      send: "rohitbuatt9755@gmail.com",
      link: "mailto:rohitbuatt9755@gmail.com",
    },
    {
      logo: <BsMessenger style={{ fontSize: "2.5rem" }} />,
      name: "Messenger",
      send: "Mario9755",
      link: "fb-messenger://user-thread/{user-id}",
    },
    {
      logo: <BsWhatsapp style={{ fontSize: "2.5rem" }} />,
      name: "WhatsApp",
      send: "7057651379",
      link: "https://api.whatsapp.com/send?phone=7057651379",
    },
  ];

  return (
    <Wrapper id="contact">
      <p className="p1">Get In Touch</p>
      <h5 className="h51">Contact Me</h5>
      <div className="mainDiv">
        <div className="fDiv">
          <SendBox data={data} />
        </div>
        <div className="sDiv">
          <form ref={form}>
            <input
              className="inp"
              placeholder="Your Full Name"
              type="text"
              name="name"
              autoComplete="off"
            ></input>
            <input
              className="inp"
              placeholder="Your Email"
              type="text"
              name="email"
              autoComplete="off"
            ></input>
            <textarea
              className="inp2"
              placeholder="Your Message"
              cols={"10"}
              rows={"10"}
              name="message"
              autoComplete="off"
            ></textarea>
            <Button type="submit" onClick={sendEmail}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Button = styled.button`
  background-color: #0e81d9;
  border: 2px solid #0e81d9;
  color: #ffffff;
  outline: none;
  margin-top: 2rem;
  padding: 1rem 1.2rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
    color: #ffffff;
  }
`;

const Wrapper = styled.section`
  height: fit-content;
  width: 100%;
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

  .mainDiv {
    display: flex;
    margin-top: 5rem;
    width: inherit;
    justify-content: space-around;
    align-items: center;

    .fDiv {
    }

    .sDiv {
      height: 100%;
      padding-bottom: 2rem;
      form {
        display: flex;
        flex-direction: column;
        height: inherit;
        align-items: flex-start;

        .inp {
          width: 80rem;
          padding: 1.5rem 4rem;
          outline: none;
          border: 2px solid #3309eeb5;
          border-radius: 1rem;
          background-color: transparent;
          margin-bottom: 2rem;
          color: #ffffff;

          &::placeholder {
            color: #ffffff;
          }
        }
        .inp2 {
          width: 80rem;
          outline: none;
          border: 2px solid #3309eeb5;
          border-radius: 1rem;
          background-color: transparent;
          padding: 1.5rem 4rem;
          color: #ffffff;

          &::placeholder {
            color: #ffffff;
          }
        }
      }
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    margin: 0rem 0rem;

    .p1 {
    }

    .h51 {
    }

    .mainDiv {
      flex-direction: column;

      .fDiv {
      }

      .sDiv {
        margin-top: 4rem;
        form {
          flex-direction: column;
          height: inherit;
          align-items: center;
          justify-content: center;

          .inp {
            width: 80vw;
            padding: 1.5rem 2rem;
          }
          .inp2 {
            width: 90vw;
            padding: 1.5rem 2rem;
          }
        }
      }
    }
  }
`;
