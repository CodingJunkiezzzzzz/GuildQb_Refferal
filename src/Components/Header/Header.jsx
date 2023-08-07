import React, { useState } from "react";
import "./Header.css";
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
import { Link } from "react-router-dom";

function Header({ handleButtonClick, handleChange }, props) {
  

  return (
    <div className="">
      <>
        <Navbar collapseOnSelect expand="lg" className="NavUpperMain">
          <Container className="nav_ka_contai">
            <Navbar.Brand className="text-white" href="#home">
              <Link to="/">
              <div>
                <img src={qb_logo} alt="#" className="qbmain" />
                <img src={qb_mobl_logo} alt="#" className="qbMobil" />
              </div>
              </Link>
            </Navbar.Brand>
            <div className="d-flex gap-3">
              <Nav.Link
                className="walletConnect2"
                href="#"
                onClick={() => handleButtonClick(0)}
              >
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
                  <Space wrap className="kop">
                    
                    <Select
                      className=""
                      defaultValue="English"
                      onChange={handleChange}
                      options={[
                        {
                          value: "en",
                          label: "English",
                        },
                        {
                          value: "jp",
                          label: "Japanese",
                        },
                      ]}
                    />
                  </Space>
                  {/* <Form.Select href="#" aria-label="Default select example" onChange={(e)=> handleClick(e)} className="selt_main">
                    <option href="#" className="optionsLnk" value={'en'}>English</option>
                    <option href="#" className="optionsLnk" value={'jp'}>Japanese</option>
                  </Form.Select> */}
                </Nav.Link>
                <Nav.Link
                  className="walletConnect"
                  href="#"
                  onClick={() => handleButtonClick(0)}
                  // className={collection == 0 ? "active" : "non_active"}
                >
                  <FaWallet className="wallet" />
                  Connect wallet
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>

      {/* -------------Navebar 2------------- */}
    </div>
  );
}

export default Header;
