import React from "react";
import { Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Importa los íconos
import "./Presentation.css";
import myPhoto from "../assets/images/my-photo.jpg";

const Presentation = () => {
    return (
        <div className="presentation" id="home">
            <div className="presentation-content">
                <div className="text-content">
                    <h1>Bienvenido a mi Portafolio</h1>
                    <p>Desarrollador Frontend | React | JavaScript</p>
                    <div className="button-group">
                        <Button variant="primary" href="#portfolio">
                            Ver Proyectos
                        </Button>
                        <Button
                            variant="outline-primary"
                            href="https://www.linkedin.com/in/tu-perfil"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin /> LinkedIn
                        </Button>
                        <Button
                            variant="outline-dark"
                            href="https://github.com/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub /> GitHub
                        </Button>
                        <Button
                            variant="outline-danger"
                            href="https://www.instagram.com/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram /> Instagram
                        </Button>
                    </div>
                </div>
                <div className="image-content">
                    <img
                        src={myPhoto}
                        alt="Foto de Presentación"
                        className="presentation-photo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Presentation;
