import React from "react";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className=" w-screen font-spartan text-white bg-whitish ">
      <NavBar />
      <LandingPage />
      <About />
      <Skills />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
