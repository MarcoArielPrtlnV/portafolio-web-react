import React from "react";
import {motion} from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Importamos los íconos
import "../css/About.css";
import aboutPhoto from '../assets/images/Frente.png';
import logoBuap from '../assets/images/Logo_de_la_BUAP.png';
import aluraLogo from '../assets/images/alura_logo2.png';


const About = () => {
    return (
        <motion.section 
            className="about" 
            id="about"
            initial={{ opacity: 0, x: -100 }}  
            whileInView={{ opacity: 1, x: 0 }}  
            transition={{ duration: 1 }}>





            <h2 style={{marginTop: '50px', marginBottom: '30px'}}>Sobre mí</h2>

            <div className="about-content" style={{marginBottom: '30px'}}>
                <img src={aboutPhoto} alt="Tu Foto" />
                <p>Durante mi formación profesional como ingeniero geofísico, he adquirido una sólida base en la participación de proyectos, trabajo en equipo y resolución de problemas. Estas habilidades me han permitido abordar desafíos complejos de manera eficiente y colaborar eficazmente con otros profesionales para alcanzar objetivos comunes. Mi experiencia en proyectos de ingeniería me ha enseñado a analizar datos, desarrollar soluciones innovadoras y gestionar el tiempo y los recursos de manera efectiva.

                    Actualmente, me estoy enfocando en el desarrollo web frontend, aprendiendo cada día y adaptándome a las demandas y tendencias tecnológicas en constante evolución en el campo del diseño y desarrollo web del lado del cliente. Estoy comprometido a mejorar mis habilidades y conocimientos, utilizando mi experiencia previa para ofrecer soluciones creativas y funcionales que enriquezcan la experiencia del usuario y cumplan con los estándares actuales de la industria.</p>
            </div>

            {/* Sección de Habilidades */}
            <div className="skills" style={{marginBottom: '40px'}}>
                <h3>Habilidades</h3>
                <div className="skills-icons">
                    <FaHtml5 size={40} />
                    <FaCss3Alt size={40} />
                    <FaJs size={40} />
                    <FaReact size={40} />
                </div>
            </div>

            {/* Sección de Formación */}
            <div className="education">
                <h3>Formación</h3>
                <div className="education-content">
                    <div className="education-item">
                        <img src={logoBuap} alt="Formación 1" style={{backgroundColor: 'white', borderRadius: '50%'}} />
                        <p style={{fontWeight: 'bold'}}>Ingeniero en Geofísica</p>
                        <p>2015 - Benemérita Universidad Autónoma de Puebla</p>
                    </div>
                    <div className="education-item alura-logo">
                        <img src={aluraLogo} alt="Formación 2" style={{borderRadius: '50%'}} />
                        <p style={{fontWeight: 'bold'}}>Formación Frontend Web Developer</p>
                        <p>2025 - Alura, Oracle Next Education</p>
                    </div>
                </div>
            </div>




        </motion.section>
    );
};

export default About