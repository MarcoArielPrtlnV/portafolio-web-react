import { Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import '../css/Header.css';
import logoImg from '../assets/images/logo-mv-developer_3.png';


const Header = () => {


    const [expanded, setExpanded] = useState(false); // Estado para controlar el menú

    const handleToggle = () => {
        setExpanded(!expanded); // Alternar el estado del menú
    }

    const handleSelect = () => {
        setExpanded(false); // Cerrar el menú al seleccionar una opción
    }


    return (
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#021526', position: 'fixed', top: 0, width: '100%', zIndex: 100 }} expanded={expanded}>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" onClick={handleToggle} />


            <Navbar.Brand href="#home" className="d-flex justify-content-center mx-auto">

                <img
                    src={logoImg}
                    alt="Logo MV Developer"
                    className="header__logo img-fluid ms-3 me-3"
                    width="120"
                    height="120"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                />

            </Navbar.Brand>


            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto" onSelect={handleSelect}>
                    <Nav.Link href="#home" className="ms-2">Inicio</Nav.Link>
                    <Nav.Link href="#about" className="ms-2">Sobre mí</Nav.Link>
                    <Nav.Link href="#portfolio" className="ms-2">Portafolio</Nav.Link>
                </Nav>

            </Navbar.Collapse>

            <Button 
                variant="link"
                className="eng-button border-0 p-0"
                style={{ position: 'fixed', right: '20px', top:'20px', zIndex: 101, cursor: 'pointer' }}
                href="https://www.linkedin.com/in/marco-ariel-pretelin-vergara/"
                target="_blank"
                rel="noopener noreferrer"
            >
                
                ENG
            </Button>

        </Navbar>
    )
}

export default Header;
