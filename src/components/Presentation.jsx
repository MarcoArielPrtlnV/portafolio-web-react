import React from "react";
import { Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 
import "../css/Presentation.css";
import profilePhoto from '../assets/images/github-photo.jpg';

const Presentation = () => {
    return (

        <div className="presentation" id="home" >

            <div className="presentation-content" style={{marginTop: '100px'}}>
                <div className="text-content">
                    <h1>¡Hola Soy Marco Vergara!</h1>

                    <p>"Soy un desarrollador web frontend aficionado a la fotografía y con especialización HTML, CSS y Javascript; tengo una formación en ingeniería geofísica que me ha dotado de habilidades excepcionales en la resolución de problemas, participación en proyectos y trabajo en equipo."</p>

                    <div className="button-group">

                        <Button
                            variant="outline-primary"
                            href="https://www.linkedin.com/in/marco-ariel-pretelin-vergara/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin /> LinkedIn
                        </Button>
                        <Button
                            variant="outline-dark"
                            href="https://github.com/MarcoArielPrtlnV/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub /> GitHub
                        </Button>
                        <Button
                            variant="outline-danger"
                            href="https://www.instagram.com/marcoarielpretelinv/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram /> Instagram
                        </Button>
                    </div>
                </div>

                <div className="image-content">
                    <img
                        src={profilePhoto} // Cambia la ruta según la ubicación de tu foto
                        alt="Foto de Presentación"
                        className="presentation-photo"
                    />
                </div>
            </div>

        </div>
    );
};

export default Presentation;
