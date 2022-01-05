import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MathNavbar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand={false} className="mathgreen navbar-light">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ fontFamily: "'Nunito', sans-serif", color: "#113D33" }}
          >
            Math Toolbox
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="mathyellow"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="dark justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={() => navigate("/")} className="link-dark">
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() => navigate("/learn")}
                  className="link-dark"
                >
                  Learn
                </Nav.Link>
                <NavDropdown
                  title="Discrete Math & Logic"
                  id="offcanvasNavbarDropdown"
                  menuVariant="light"
                >
                  <NavDropdown.Item
                    onClick={() => navigate("/tools/recursion-sandbox")}
                  >
                    Recursion Sandbox
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/tools/boolean-algebra")}
                  >
                    Boolean Algebra
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/tools/bigo-optimization")}
                  >
                    BigO Optimization
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Set Theory"
                  id="offcanvasNavbarDropdown"
                  menuVariant="light"
                >
                  <NavDropdown.Item
                    onClick={() =>
                      navigate("/tools/cartesian-product-calculator")
                    }
                  >
                    Cartesian Product Calculator
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/tools/power-set-calculator")}
                  >
                    Power Set Calculator
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="About"
                  id="offcanvasNavbarDropdown"
                  menuVariant="light"
                >
                  <NavDropdown.Item onClick={() => navigate("/about")}>
                    Website
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/about/orr")}>
                    Creator
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate("/contact")}>
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MathNavbar;
