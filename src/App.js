import React, { useEffect } from "react";
import { styled } from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Nav from "./Components/Nav";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";
import Services from "./Components/Services";
import { GlobalStyle } from "./GlobalStyle";
import * as Scroll from "react-scroll";

const App = () => {
  var scroll = Scroll.animateScroll;
  const theme = {};
  useEffect(() => {
    scroll.scrollToTop();
  }, [scroll]);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#000000, #130f40);
`;
