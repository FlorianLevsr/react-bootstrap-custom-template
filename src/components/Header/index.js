import React, { useState } from 'react';
import { Container, Col, Row, Nav, Navbar } from 'react-bootstrap';

import logo from '../../assets/images/header/b-logo.png';

function Header() {

  const [ isOpened, setIsOpened ] = useState(false);

  const togglerhandler = () => {
    setIsOpened(!isOpened);
  }

  return (

    <Container fluid className="header">

      <Navbar collapseOnSelect expand="sm" variant="dark">

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => togglerhandler() }/>

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="#menu1">Menu 1</Nav.Link>
            <Nav.Link href="#menu2">Menu 2</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#signUp">Inscription</Nav.Link>
            <Nav.Link href="#signIn">Connexion</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

      </Navbar>

      <Row>

        <Col className="text-center"><img src={logo} alt="bootstrap-logo" className="header__logo"/></Col>

      </Row>

      <Row>

        <Col className={ isOpened ? "text-center d-none" : "text-center" }>Custom template réalisé par Florian!</Col>

      </Row>

      <Row>

        <Col className={ isOpened ? "text-center d-none" : "text-center" }>react / react-bootstrap / sass</Col>

      </Row>


    </Container>

  );

}

export default Header;