import React from "react";
import { styled } from "styled-components";
import ServicesData from "./ServicesData";

const Services = () => {
  let UI = [
    "Conduct user research to understand target audiences and their needs.",
    "Analyze user behaviors and preferences to inform design decisions.",
    "Create wireframes to outline the layout and structure of the user interface.",
    "Develop interactive prototypes to test and validate design concepts.",
    "Design the overall look and feel of the user interface, including color schemes, typography, and imagery.",
    "Provide ongoing support for design updates and maintenance as the product evolves.",
  ];

  let WebDevelopment = [
    "Create custom websites from scratch, tailored to the client needs and objectives.",
    "Develop web applications with interactive features and functionality.",
    "Write HTML, CSS, and JavaScript code to build the user interface and client-side functionality.",
    "Ensure responsive design to make websites accessible on various devices.",
    "Set up server infrastructure and databases to store and manage data.",
    "Develop server-side scripts and applications to handle business logic and server operations",
  ];

  let Content = [
    "Create and format text content for web pages, including headings, paragraphs, lists, and links.",
    "Ensure readability and accessibility by following best practices for web typography.",
    "Implement responsive images to ensure they adapt to different screen sizes.",
    "Embed and optimize multimedia content such as videos, audio files, and interactive elements.",
    "Use HTML5 and appropriate web technologies for multimedia playback.",
    "Set up workflows and permissions for content approval and publishing.",
  ];
  return (
    <Wrapper id="services">
      <p className="p1">What Can I Offer</p>
      <h5 className="h51">Services</h5>
      <div className="container">
        <ServicesData data={UI} head={"UI/UX Design"} />
        <ServicesData data={WebDevelopment} head={"Web Development"} />
        <ServicesData data={Content} head={"Content Creation"} />
      </div>
    </Wrapper>
  );
};

export default Services;

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
    margin-top: 4rem;
    width: 90vw;
    display: flex;
    justify-content: space-around;
  }
`;
