import React from "react";
import { Container } from "react-bootstrap";
import MathNavbar from "../../components/MathNavbar";

function Contact(): JSX.Element {
  return (
    <>
      <MathNavbar />
      <Container fluid="sm">
        <div style={{ height: "20px" }} />
        <h1>Contact</h1>
        <p>Contact functionality will be available soon!</p>
      </Container>
    </>
  );
}

export default Contact;
