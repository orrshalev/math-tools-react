import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MathNavbar from "../components/MathNavbar";
import cartesianPic from "../images/cartesian.png";
import powerSetPic from "../images/powerset.png";
import comingSoonPic from "../images/200200.png";

function Home(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="App">
      <MathNavbar />
      <Container fluid="sm">
        <div style={{ height: "20px" }} />
        <h1>Math Toolbox</h1>
        <div style={{ height: "10px" }} />
        <p className="lead">
          Welcome to Math Toolbox! This website provides useful tools that will
          help you make the most out of your math education.
        </p>
        <div style={{ height: "20px" }} />
        <h2>Featured Tools</h2>
        <div style={{ height: "30px" }} />
        <Row className="gy-5">
          <Col style={{ width: "300px" }}>
            <Card style={{ width: "13rem", height: "396px", margin: "auto" }}>
              <Card.Img className="top" src={cartesianPic} />
              <Card.Body>
                <Card.Title>Cartesian Product Calculator</Card.Title>
                <Card.Text>
                  Calculate the Cartesian product of 2-10 sets.
                </Card.Text>
                <Button
                  onClick={() =>
                    navigate("/tools/cartesian-product-calculator")
                  }
                  variant=""
                  className="mathyellow"
                >
                  Use tool
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "396px", margin: "auto" }}>
              <Card.Img className="top" src={powerSetPic} />
              <Card.Body>
                <Card.Title>Power Set Calculator</Card.Title>
                <Card.Text>Calculate the power set of a set.</Card.Text>
                <Button
                  onClick={() => navigate("/tools/power-set-calculator")}
                  variant=""
                  className="mathyellow"
                >
                  Use tool
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "396px", margin: "auto" }}>
              <Card.Img className="top" src={comingSoonPic} />
              <Card.Body>
                <Card.Title>Coming soon!</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem", height: "396px", margin: "auto" }}>
              <Card.Img className="top" src={comingSoonPic} />
              <Card.Body>
                <Card.Title>Coming soon!</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{ height: "50px" }} />
      </Container>
    </div>
  );
}

export default Home;
