import "./App.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import MainContent from "./components/main-content";
import Header from "./components/header";
import React from "react";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent></MainContent>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Navigation></Navigation>
      <Footer />
    </div>
  );
}

export default App;
