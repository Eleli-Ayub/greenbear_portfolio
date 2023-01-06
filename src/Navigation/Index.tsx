import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SingleBlog from "../pages/Blog/SingleBlog";
import About from "../pages/Main/About";
import Blog from "../pages/Main/Blog";
import Contact from "../pages/Main/Contact";
import Homepage from "../pages/Main/Homepage";
import OurWorks from "../pages/Main/OurWorks";
import Services from "../pages/Main/Services";
import AndroidDevelopement from "../pages/Services/AndroidDevelopement";
import GraphicDesign from "../pages/Services/GraphicDesign";
import Marketing from "../pages/Services/Marketing";
import MobileDevelopement from "../pages/Services/MobileDevelopement";
function Index() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Team" element={<SingleBlog />} />
          <Route path="/Games" element={<Blog />} />
          <Route path="/" element={<About />} />
          <Route path="/Team" element={<Contact />} />
          <Route path="/Games" element={<OurWorks />} />
          <Route path="/Team" element={<Services />} />
          <Route path="/Games" element={<GraphicDesign />} />
          <Route path="/Team" element={<Marketing />} />
          <Route path="/Games" element={<MobileDevelopement />} />
          <Route path="/Games" element={<AndroidDevelopement />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default Index;
