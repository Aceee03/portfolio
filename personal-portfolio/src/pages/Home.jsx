import React from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="primary">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
