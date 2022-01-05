import React from "react";
import { Container } from "react-bootstrap";
import MathNavbar from "../../components/MathNavbar";

function Learn(): JSX.Element {
  return (
    <>
      <MathNavbar />
      <Container fluid="sm">
        <div style={{ height: "20px" }} />
        <h1>Learn</h1>
        <div style={{ height: "10px" }} />
        <h4>
          This website is not just about the tools we provide, but about the
          knowledge you gain!
        </h4>
        <div style={{ height: "10px" }} />
        <p>
          Coming soon, there will be educational articles about various topics
          related to understanding and utilizing the Math Toolbox like a true
          mathematician.
        </p>
      </Container>
    </>
  );
}

export default Learn;
