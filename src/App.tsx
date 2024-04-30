import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import React from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

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
