import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// import MainContent from "./components/MainContent";
import Header from "./components/Header";
import React from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      {/* <div className="App-main">
        <MainContent></MainContent>
      </div> */}
      <div className="App-content">
        <AboutMe></AboutMe>
        <Projects></Projects>
      </div>
      <div className="App-nav">
        <Navigation></Navigation>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
