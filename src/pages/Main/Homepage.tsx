import React from "react";
import AboutUs from "../../components/Homepage/AboutUs";
import Blog from "../../components/Homepage/Blog";
import ContactProject from "../../components/Homepage/ContactProject";
import ContactUs from "../../components/Homepage/ContactUs";
import Feedback from "../../components/Homepage/Feedback";
import LandingPage from "../../components/Homepage/LandingPage";
import Projects from "../../components/Homepage/Projects";
import Services from "../../components/Homepage/Services";
import Team from "../../components/Homepage/Team";

function Homepage() {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <Services />
      <Projects />
      <Feedback />
      <Team />
      <Blog />
      <ContactUs />
      <ContactProject />
    </div>
  );
}

export default Homepage;
