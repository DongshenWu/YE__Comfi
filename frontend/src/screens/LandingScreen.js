import React from "react";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import Testimonials from "./components/landing/Testimonials";
import ProductSection from "./components/landing/ProductSection";
import About from "./components/landing/About";
import CallToAction from "./components/landing/CallToAction";

const LandingScreen = () => {
  return (
    <>
      <Hero />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#faf79a"
          fillOpacity="1"
          d="M0,64L34.3,80C68.6,96,137,128,206,138.7C274.3,149,343,139,411,117.3C480,96,549,64,617,74.7C685.7,85,754,139,823,138.7C891.4,139,960,85,1029,74.7C1097.1,64,1166,96,1234,144C1302.9,192,1371,256,1406,288L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <About />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#faf79a"
          fill-opacity="1"
          d="M0,256L40,224C80,192,160,128,240,101.3C320,75,400,85,480,122.7C560,160,640,224,720,229.3C800,235,880,181,960,160C1040,139,1120,149,1200,149.3C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <ProductSection />
      <Features />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#faf79a"
          fillOpacity="1"
          d="M0,64L34.3,64C68.6,64,137,64,206,80C274.3,96,343,128,411,154.7C480,181,549,203,617,202.7C685.7,203,754,181,823,181.3C891.4,181,960,203,1029,229.3C1097.1,256,1166,288,1234,250.7C1302.9,213,1371,107,1406,53.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <Testimonials />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#faf79a"
          fill-opacity="1"
          d="M0,128L40,117.3C80,107,160,85,240,101.3C320,117,400,171,480,197.3C560,224,640,224,720,192C800,160,880,96,960,90.7C1040,85,1120,139,1200,144C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <CallToAction />
    </>
  );
};

export default LandingScreen;
