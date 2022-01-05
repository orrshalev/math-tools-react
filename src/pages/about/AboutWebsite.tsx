import React from "react";
import { Container } from "react-bootstrap";
import MathNavbar from "../../components/MathNavbar";

function AboutWebsite(): JSX.Element {
  return (
    <>
      <MathNavbar />
      <Container fluid="sm">
        <div style={{ height: "10px" }} />
        <h1>About Math Toolbox</h1>
        <div style={{ height: "10px" }} />
        <p>
          Math Toolbox is a website targeted at helping undergraduate
          mathematics and computer science students (and anyone else otherwise
          interested) experiment and play around with various concepts rooted in
          higher-maths through interactive software.
        </p>
      </Container>
    </>
  );
}

export default AboutWebsite;
