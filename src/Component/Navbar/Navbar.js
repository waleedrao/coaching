import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
const NavbarCoaching = () => {
  const navigate = useNavigate();
  const [token, setAdminToken] = useState(sessionStorage?.getItem("token"));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [token]);

  return (
    <Navbar bg="" expand="lg">
      <Container fluid style={{ color: "white" }}>
        <Navbar.Brand href="#" className="left-1">
          <img src={Logo} alt="" className="logo-img" />
        </Navbar.Brand>
        <div className="con-resp">
          <RxHamburgerMenu onClick={handleShow} fontSize={35} />
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={Logo} alt="" className="logo-img" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {token == null ? (
              <Link style={{ textDecoration: "none" }} to="/">
                <div className="right-11">Home</div>
              </Link>
            ) : (
              ""
            )}

            {token !== null ? (
              <div
                onClick={() => {
                  sessionStorage.removeItem("token");
                  navigate("/login");
                }}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div className="right-22">logout</div>
              </div>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <div className="right-22">Inloggen</div>
              </Link>
            )}
            <Link style={{ textDecoration: "none" }} to="/signup">
              <div className="right-33">Registreren</div>
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="new-div">
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            <></>

            <Form className="d-flex nav-right ">
              {token == null ? (
                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                  <div className="right-1">Home</div>
                </Link>
              ) : (
                ""
              )}
              {token !== null ? (
                <div
                  onClick={() => {
                    sessionStorage.removeItem("token");
                    navigate("/login");
                  }}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <div className="right-2">logout</div>
                </div>
              ) : (
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/login"
                >
                  <div className="right-2">Inloggen</div>
                </Link>
              )}
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/signup"
              >
                <div className="right-3">Registreren</div>
              </Link>
            </Form>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarCoaching;
