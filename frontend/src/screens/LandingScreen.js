import React from "react";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import Testimonials from "./components/landing/Testimonials";
import ProductSection from "./components/landing/ProductSection";
import About from "./components/landing/About";
import CallToAction from "./components/landing/CallToAction";
import Header from "./components/Header";

const LandingScreen = () => {
  return (
    <>
      <Header p={window.location.pathname} />
      <Hero />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#faf79a"
          fill-opacity="1"
          d="M0,64L34.3,69.3C68.6,75,137,85,206,80C274.3,75,343,53,411,48C480,43,549,53,617,74.7C685.7,96,754,128,823,154.7C891.4,181,960,203,1029,213.3C1097.1,224,1166,224,1234,186.7C1302.9,149,1371,75,1406,37.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <About />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#faf79a"
          fill-opacity="1"
          d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,53.3C672,32,768,32,864,64C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <ProductSection />
      <Features />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#faf79a"
          fill-opacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,122.7C672,128,768,192,864,197.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Testimonials />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#faf79a"
          fill-opacity="1"
          d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,53.3C672,32,768,32,864,64C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <CallToAction />
    </>
  );
};

export default LandingScreen;
