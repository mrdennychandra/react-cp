import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Home.css'; // Optional for custom styling

function Home() {
    return (
        <Container fluid className="hero-section d-flex align-items-center text-center text-white" style={{ minHeight: '75vh', backgroundImage: `url('your-image-url.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-text mx-auto">
                <h1 className="display-4">Welcome to My Company</h1>
                <p className="lead">This is our company profile</p>
                <Button variant="primary" size="lg">Learn More</Button>
            </div>
        </Container>
    );
}

export default Home;
