import React from "react";
import { Container } from "react-bootstrap";
import MathNavbar from "../../components/MathNavbar";

function AboutOrr(): JSX.Element {
  return (
    <>
      <MathNavbar />
      <Container fluid="sm">
        <div style={{ height: "20px" }} />
        <h1>Hey there!</h1>
        <div style={{ height: "10px" }} />
        <h4>
          My name is Orr Shalev, and I am the developer behind Math Toolbox.
        </h4>
        <div style={{ height: "10px" }} />
        <p>
          I am an undergraduate computer science student in the University of
          Georgia. Having taken a few higher-math courses (such as discrete
          mathematics and linear algebra), I found it a bit fraustrating that I
          could not find an easy way to play around and experiment with the
          ideas and concepts that I learned about in class. This inspired me to
          create my own Python scripts that would simulate these ideas. I felt
          that being able to use the tools I build helped me understand what I
          was learning in my classes way better, so I decided that it is time to
          make a website that helps other students like me. Hope you enjoy the
          website!
        </p>
        <p>
          Feel free to connect with me on{" "}
          <a href="https://www.linkedin.com/in/orr-shalev-297710202/">
            LinkedIn
          </a>
          , or check out my <a href="https://github.com/orrshalev">GitHub</a>!
        </p>
      </Container>
    </>
  );
}

export default AboutOrr;
