import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import logo from '../../assets/images/header/b-logo.png';

function Footer() {

    return (

        <div className="footer">

            <Container xs={12} md={8} className="footer__container">

                <Row>

                    <Col xs={3} className="text-center d-none d-lg-block"><img src={logo} alt="bootstrap-logo" className="footer__logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam et mauris posuere vulputate in sed libero. Duis condimentum, diam id bibendum tincidunt, felis lorem elementum mauris, sed accumsan mauris lorem nec ipsum. Mauris a orci in est placerat efficitur. </p>
                    </Col>

                    <Col xs={12} md={3} className="text-center">

                        <Row>
                            <Col>
                                <h4 className="footer__subtitle">Footer info 1</h4>
                                <ul>
                                    <li>Lien 1</li>
                                    <li>Lien 2</li>
                                    <li>Lien 3</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={12} md={3} className="text-center">

                        <Row>
                            <Col>
                                <h4 className="footer__subtitle">Footer info 2</h4>
                                <ul>
                                    <li>Lien 1</li>
                                    <li>Lien 2</li>
                                    <li>Lien 3</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={12} md={3} className="text-center d-none d-lg-block">

                        <Row>
                            <Col>
                                <h4 className="footer__subtitle">Footer info 3</h4>
                                <ul>
                                    <li>Lien 1</li>
                                    <li>Lien 2</li>
                                    <li>Lien 3</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>

                </Row>


            </Container>

            <Container fluid className="footer__copyright">

                <Row>
                    <Col className="text-center" >
                        Florian Levavasseur © 2021 Tous droits réservés
                </Col>
                </Row>

            </Container>

        </div>



    );

}

export default Footer;