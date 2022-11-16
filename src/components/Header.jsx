import './Header.css'

import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo from "../images/Yugioh_Logo.png";

const Header = () => {
    return ( 
        <Fragment>
            <Container fluid className='header'>
                <Row>
                    <Col xs={3}>
                        <img src={logo} alt="Yu-Gi-Oh Logo" className='imgHeader'/>
                    </Col>
                    <Col xs='6'/>
                    <Col><a href="https://ygoprodeck.com/" target="_blank" rel='noreferrer' className='aHeader'>Our Yu-Gi-Oh! portal</a></Col>
                </Row>
            </Container>
        </Fragment>
     );
}

export default Header;