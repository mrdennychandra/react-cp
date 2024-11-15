import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function Project() {
    const projects = [
        { title: 'Project A', description: 'Description for Project A.' },
        { title: 'Project B', description: 'Description for Project B.' },
        { title: 'Project C', description: 'Description for Project C.' }
    ];

    return (
        <Container className="my-5">
            <h1>Our Projects</h1>
            <p>Here is a list of our recent projects:</p>
            <Accordion>
                {projects.map((project, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{project.title}</Accordion.Header>
                        <Accordion.Body>
                            {project.description}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
}

export default Project;
