import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Col, Row } from 'react-bootstrap';
import { Twitter, Facebook, Instagram } from 'react-bootstrap-icons'

import article_img from '../../assets/images/articles/bootstrap-banner.jpg'

// ------------------------------------ //
// EXEMPLE DE PRESENTATION D'UN ARTICLE //
// ------------------------------------ //

function Articles() {

    return (

        <div className="articles">

            <Container xs={12} md={8} className="articles__container">

                <Row>

                    <Col xs={12} md={8} className="text-center">

                        <h2 className="articles__title">Bootstrap c'est super pratique!</h2>

                        <img className="article__picture img-fluid" src={article_img} alt="bootstrap banner" />
                        
                        <p className="articles__content" dangerouslySetInnerHTML={{
                            __html:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a tempor felis, eu rhoncus mi. Nulla luctus leo ac odio porta pharetra. Nulla vehicula elit at mauris sagittis, a pharetra erat lacinia. Fusce et risus iaculis, luctus justo in, bibendum lectus. Donec blandit turpis tincidunt augue ultricies varius. Quisque quam augue, elementum et elit ut, elementum ornare eros. Nullam quis nulla orci. <br> Aenean sed commodo arcu, a condimentum nisl. Fusce justo nisi, pellentesque auctor massa vel, porttitor convallis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ornare nisl. Phasellus interdum arcu vitae risus auctor, vel lobortis diam dignissim. Cras ut felis fermentum nisi vulputate sollicitudin. Cras bibendum nisl sit amet elementum mattis. Mauris hendrerit sit amet dui in ullamcorper. Quisque volutpat justo eu scelerisque mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae nisl at orci molestie vestibulum. Mauris mollis augue eget metus tempor venenatis. <br> Aliquam porttitor est sit amet aliquam mollis. Sed consectetur, est at suscipit imperdiet, sapien turpis fringilla arcu, molestie tempor lectus mauris eget est. Pellentesque vestibulum sapien a metus vehicula, nec imperdiet erat pretium. Mauris mollis lectus id purus porta, at aliquam lorem tincidunt. Quisque consequat nunc vel hendrerit vehicula. Suspendisse ac viverra magna. Cras commodo nibh eu ex varius convallis. Aliquam sagittis nulla ante, eu malesuada dolor ultricies ut. Aenean commodo ut neque ac aliquam. Quisque pretium sem non sagittis pharetra."
                        }}/>

                    </Col>

                    <Col xs={12} md={4} className="text-center">

                        <h2 className="articles__share">Partager cet article</h2>

                        <ul className="">
                            <li className="articles__share__icons d-inline d-md-block"><Link to='#twitter'><Twitter size={50} /></Link></li>
                            <li className="articles__share__icons d-inline d-md-block"><Link to='#facebook'><Facebook size={50} /></Link></li>
                            <li className="articles__share__icons d-inline d-md-block"><Link to='#instagram'><Instagram size={50} /></Link></li>
                        </ul>

                    </Col>

                </Row>

            </Container>

        </div>

    );

}

export default Articles;