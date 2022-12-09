import React, { useState } from "react";
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

const Navbar2Coaching = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <div className="right-11">Home</div>
            <div className="right-22">Uitloggen</div>
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
            <>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="right-11">Home</div>
                  <div className="right-22">Uitloggen</div>
                </Offcanvas.Body>
              </Offcanvas>
            </>
            <Form className="d-flex nav-right ">
              <div className="right-1">Home</div>
              <div className="right-2">Uitloggen</div>
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

export default Navbar2Coaching;
