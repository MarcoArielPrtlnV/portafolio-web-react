import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="text-center">
                <p>&copy; 2025 Mi Desarrollado por MV Developer</p>
                <div className="social-icons">

                    <a
                        href="https://www.linkedin.com/in/marco-ariel-pretelin-vergara/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaLinkedin className="icon" />
                    </a>

                    <a
                        href="https://github.com/MarcoArielPrtlnV/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaGithub className="icon" />
                    </a>

                    <a
                        href="https://www.instagram.com/marcoarielpretelinv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaInstagram className="icon" />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;