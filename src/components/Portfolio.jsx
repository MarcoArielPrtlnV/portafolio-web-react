import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "../css/Portfolio.css";
import errortPhoto from '../assets/images/icono-mv-developer.svg';

const Portfolio = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('https://my-json-server.typicode.com/MarcoArielPrtlnV/projects-api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
        
    }, [])

    const handleImageError = (e) => {

        e.target.src = errortPhoto;
    }


    return (
        <motion.section 
            className="portfolio" 
            id="portfolio"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}>

            <h2 style={{marginTop: '50px', marginBottom: '30px'}}>Portafolio</h2>
            <Row className="justify-content-center">

                {projects.map((project) => {

                    if (project.id < 7) {

                        return (

                            <Col key={project.id} md={4} sm={12} className="d-flex justify-content-center">

                            <Card className="portfolio-card" key={project.id}>
    
                                <Card.Img 
                                    variant="top" 
                                    src={project.image} 
                                    alt={`Imagen del proyecto ${project.name}`}
                                    onError={handleImageError}
                                    loading="lazy"
    
                                />
    
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
    
                                    <div className="technologies">
                                        <h5>Tecnologías aplicadas</h5>
                                        <div className="tech-icons">
                                            <FaHtml5 title="HTML5" className="tech-icon" />
                                            <FaCss3Alt title="CSS3" className="tech-icon" />
                                            <FaJs title="JavaScript" className="tech-icon" />
                                            
                                        </div>
                                    </div>
    
                                    <div className="portfolio-buttons">
    
                                    <Button variant="primary" href={project.url_page} target="_blank" rel="noopener noreferrer" aria-label={`Ver página del proyecto ${project.name}`}>
                                        <FaGlobe />
                                    </Button>
                                    <Button variant="secondary" href={project.url_github} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio del proyecto ${project.name}`}>
                                        <FaGithub />
                                    </Button>
    
                                    </div>
    
                                </Card.Body>
    
                            </Card>
    
                        </Col>
                        )

                    } else {

                        return (

                            <Col key={project.id} md={4} sm={12} className="d-flex justify-content-center">

                            <Card className="portfolio-card">
    
                                <Card.Img 
                                    variant="top" 
                                    src={project.image} 
                                    alt={`Imagen del proyecto ${project.name}`}
                                    onError={handleImageError}
                                    loading="lazy"
    
                                />
    
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
    
                                    <div className="technologies">
                                        <h5>Tecnologías aplicadas</h5>
                                        <div className="tech-icons">
                                            <FaHtml5 title="HTML5" className="tech-icon" />
                                            <FaCss3Alt title="CSS3" className="tech-icon" />
                                            <FaJs title="JavaScript" className="tech-icon" />
                                            <FaReact title="React" className="tech-icon" />
                                            
                                        </div>
                                    </div>
    
                                    <div className="portfolio-buttons">
    
                                    <Button variant="primary" href={project.url_page} target="_blank" rel="noopener noreferrer" aria-label={`Ver página del proyecto ${project.name}`}>
                                        <FaGlobe />
                                    </Button>
                                    <Button variant="secondary" href={project.url_github} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio del proyecto ${project.name}`}>
                                        <FaGithub />
                                    </Button>
    
                                    </div>
    
                                </Card.Body>
    
                            </Card>
    
                        </Col>
                        )
                    }



                })}

            </Row>

        </motion.section>
    );
};

export default Portfolio;