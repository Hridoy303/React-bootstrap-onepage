import React from 'react'
import { Navbar, Container, Nav,  } from 'react-bootstrap'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/Logo.png"
import './menu.css'

const Menu = () => {
  return (
    <div>
       <Navbar expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Product <MdOutlineKeyboardArrowDown /></Nav.Link>
            <Nav.Link href="#link">Template <MdOutlineKeyboardArrowDown /></Nav.Link>
           <Nav.Link href="#link">Blog <MdOutlineKeyboardArrowDown /></Nav.Link>
           <Nav.Link href="#link">Princing <MdOutlineKeyboardArrowDown /></Nav.Link>
          
          
          </Nav>
        </Navbar.Collapse>
        <div className="btn">
            <a href="#">Sign in</a>
            <a className='second' href="#">Start Free</a>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
