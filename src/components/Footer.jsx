import './Footer.css';

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ygologo from '../images/Ygoprodeck_Logo.png';

const Footer = () => {
    return ( 
        <Fragment>
            <Container fluid className='footer'>
                <Row>
                    <Col xs={4}>
                        <h5 className='titleFooter'>Our Yu-Gi-Oh Community</h5>
                        <a href="https://ygoprodeck.com/" target="_blank" rel='noreferrer'><img src={ygologo} alt="YGOProdeck Logo"  className='imgFooter'/></a>
                    </Col>
                    <Col>
                        <Container fluid>
                            <Row>
                                <Col><a href="https://pokemoncard.io/" target="_blank" rel='noreferrer' className='aFooter'>Pokémon portal</a></Col>
                                <Col><a href="https://marvelsnap.io/" target="_blank" rel='noreferrer' className='aFooter'>Marvel Snap portal</a></Col>
                            </Row>
                            <Row>
                                <Col><a href="https://digimoncard.io/" target="_blank" rel='noreferrer' className='aFooter'>Digimon portal</a></Col>
                                <Col><a href="https://hearthcard.io/" target="_blank" rel='noreferrer' className='aFooter'>Hearthstone portal</a></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Container className='copyright'>
                    <p className='pFooter'>The literal and graphical information presented on this site about 
                    Yu-Gi-Oh!, including card images, the attribute, level/rank and type symbols, and card 
                    text, is copyright 4K Media Inc, a subsidiary of Konami Digital Entertainment, Inc.</p>
                    <p className='pFooter'>This website is not produced by, endorsed by, supported by, or 
                    affiliated with 4k Media or Konami Digital Entertainment.</p>
                    <p className='pFooter'>All other content © 2016-2022 YGOPRODeck.</p>
                </Container>
            </Container>
        </Fragment>
     );
}
 
export default Footer;