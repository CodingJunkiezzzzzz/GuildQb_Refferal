import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FaWallet } from "react-icons/fa";

function Header() {
  return (
    <div className="">
      <>
        <Navbar collapseOnSelect expand="lg" className="bg-black NavUpperMain">
          <Container className="">
            <Navbar.Brand className="text-white" href="#home">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto firstNavLink">
                
                <Nav.Link className="MainLink" href="#features">Metaverse</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Token</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Quest</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">OharaiNFT</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Scholarship</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Dock</Nav.Link>
                
              </Nav>

              <Nav className="align-items-center">
                <Nav.Link href="#deets">
                  <Form.Select aria-label="Default select example" className="selt_main">
                    <option>English</option>
                    <option value="1">Japanese</option>
                  </Form.Select>
                </Nav.Link>
                <Nav.Link className="walletConnect" href="#"><FaWallet className="wallet"/>Connect wallet</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
