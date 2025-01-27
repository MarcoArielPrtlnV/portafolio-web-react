import { useState, useEffect } from "react";
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
            transition={{ duration: 1 }}
        >
            <h2 style={{ marginTop: "50px", marginBottom: "30px" }}>Portafolio</h2>

            <Row className="justify-content-center">

                {projects.map((project) => (

                    <Col key={project.id} md={4} sm={12} className="d-flex justify-content-center">
                        <Card className="portfolio-card">
                            <div className="card-image-container">
                                <Card.Img
                                    variant="top"
                                    src={project.image}
                                    alt={`Imagen del proyecto ${project.name}`}
                                    onError={handleImageError}
                                    loading="lazy"
                                />
                                <div className="card-overlay">
                                    <div className="overlay-content">
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                        <div className="technologies">
                                            <h5>Tecnologías aplicadas</h5>
                                            <div className="tech-icons">
                                                <FaHtml5 title="HTML5" className="tech-icon" />
                                                <FaCss3Alt title="CSS3" className="tech-icon" />
                                                <FaJs title="JavaScript" className="tech-icon" />
                                                {project.id >= 7 && <FaReact title="React" className="tech-icon" />}
                                            </div>
                                        </div>
                                        <div className="portfolio-buttons">
                                            <a
                                                href={project.url_page}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Ver página del proyecto ${project.name}`}
                                            >
                                                <FaGlobe />
                                            </a>
                                            <a
                                                href={project.url_github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Ver repositorio del proyecto ${project.name}`}
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        
                    </Col>
                ))}

            </Row>

        </motion.section>
    );
};

export default Portfolio;