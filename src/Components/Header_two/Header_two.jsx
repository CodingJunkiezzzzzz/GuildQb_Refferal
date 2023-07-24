import React from "react";
// import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FaWallet } from "react-icons/fa";
import qb_logo from "../Assets/Logo.png";
import qb_mobl_logo from "../Assets/mobile_logo.png";
import pt_logo from "../Assets/pt_logomain.png";
import twi_logo from "../Assets/twi.png";
import discord_logo from "../Assets/discord.png";
import { Select, Space } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Header_two = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="NavUpperMain">
        <Container className="">
          <Navbar.Brand className="text-white" href="#home">
            <div>
              <img src={qb_logo} alt="#" className="qbmain" />
              <img src={qb_mobl_logo} alt="#" className="qbMobil" />
            </div>
          </Navbar.Brand>
          <div className="d-flex gap-3">
            <Nav.Link className="walletConnect2" href="#">
              <FaWallet className="wallet" />
              Connect
            </Nav.Link>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="humberger"
            />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto firstNavLink">
              <Nav.Link className="MainLink" href="#">
                Metaverse
              </Nav.Link>
              <Nav.Link className="MainLink" href="#">
                Token
              </Nav.Link>
              <Nav.Link className="MainLink" href="#">
                Quest
              </Nav.Link>
              <Nav.Link className="MainLink" href="#">
                OharaiNFT
              </Nav.Link>
              <Nav.Link className="MainLink" href="#">
                Scholarship
              </Nav.Link>
              <Nav.Link className="MainLink" href="#">
                Dock
              </Nav.Link>
            </Nav>

            <Nav className="d-flex align-items-center">
              <Nav.Link href="" className="sltUpper">
                <Space wrap className="">
                  <Select
                    className="kop"
                    defaultValue="English"
                    onChange={handleChange}
                    options={[
                      {
                        value: "English",
                        label: "English",
                      },
                      {
                        value: "Japanese",
                        label: "Japanese",
                      },
                    ]}
                  />
                </Space>
                {/* <Form.Select aria-label="Default select example" className="selt_main">
                    <option className="optionsLnk">English</option>
                    <option className="optionsLnk" value="1">Japanese</option>
                  </Form.Select> */}
              </Nav.Link>
              <Nav.Link className="ptbX mg" href="">
                <img src={pt_logo} alt="#" className="ptimgg" />0 pt
              </Nav.Link>

              <Nav.Link className="ms-2 mg" href="">
                <div className="d-flex align-items-center gap-3">
                  <img src={discord_logo} alt="" className="twi" />
                  <img src={twi_logo} alt="" className="twi" />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header_two;
