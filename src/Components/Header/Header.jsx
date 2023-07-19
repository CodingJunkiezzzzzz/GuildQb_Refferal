import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FaWallet } from "react-icons/fa";
import qb_logo from "../Assets/Logo.png"
import qb_mobl_logo from '../Assets/mobile_logo.png'

function Header() {
  return (
    <div className="">
      <>
        <Navbar collapseOnSelect expand="lg" className="NavUpperMain">
          <Container className="">
            <Navbar.Brand className="text-white" href="#home">
              <div>
                <img src={qb_logo} alt="#" className="qbmain" />
                <img src={qb_mobl_logo} alt="#" className="qbMobil" />
              </div>
            </Navbar.Brand>
            <div className="d-flex gap-3">
            <Nav.Link className="walletConnect2" href="#"><FaWallet className="wallet"/>Connect</Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="humberger" />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto firstNavLink">
                
                <Nav.Link className="MainLink" href="#features">Metaverse</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Token</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Quest</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">OharaiNFT</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Scholarship</Nav.Link>
                <Nav.Link className="MainLink" href="#pricing">Dock</Nav.Link>
                
              </Nav>

              <Nav className="d-flex align-items-center">
                <Nav.Link href="#deets" className="sltUpper">
                  <Form.Select aria-label="Default select example" className="selt_main">
                    <option className="optionsLnk">English</option>
                    <option className="optionsLnk" value="1">Japanese</option>
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
