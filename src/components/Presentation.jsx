import React from "react";
import {motion} from 'framer-motion';
import { Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa"; 
import "../css/Presentation.css";
import profilePhoto from '../assets/images/github-photo.jpg';

const Presentation = () => {
    return (

        <motion.section 
            className="presentation" 
            id="home"
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} >

            <div className="presentation-content" style={{marginTop: '100px'}}>
                <div className="text-content">
                    <h1>¡Hola Soy Marco Vergara!</h1>

                    <p>"Soy un desarrollador web frontend aficionado a la fotografía y con especialización HTML, CSS, Javascript y React; tengo una formación en ingeniería geofísica que me ha dotado de habilidades excepcionales en la resolución de problemas, participación en proyectos y trabajo en equipo."</p>

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

                        <Button
                            variant="outline-secondary"
                            href="https://drive.google.com/uc?export=download&id=18kjQ_P9DngJKtu3x6crrMuB2UsCuMUxp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFilePdf /> Descargar CV
                        </Button>

                        <Button
                            variant="outline-info"
                            href="https://drive.google.com/uc?export=download&id=1H9emNN4hTCvhKQTJ44UFsna8WQZ1JNWv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFilePdf /> Download CV 
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

        </motion.section>
    );
};

export default Presentation;
