import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img from './images/laptop.jpeg'

function About() {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col md={6}>
                    <h1>About Us</h1>
                    <p>description here</p>
                </Col>
                <Col md={6}>
                    <Image 
                        src={img}
                        alt="Profile" 
                        fluid 
                        rounded 
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default About;
