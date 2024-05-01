import React from "react";

function AboutMe() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>About Me</h2>
      <p style={{ maxWidth: 600 }}>
        I'm Stephanie Borchers, a software engineer with experience in
        web-application development. Before software, I practiced structural
        engineering, and have worked on the structural design of over 15
        buildings across the US. My passion for software and technology
        developed from the desire to automate processes and improve efficiency.
      </p>
    </main>
  );
}

export default AboutMe;
