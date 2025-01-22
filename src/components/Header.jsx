import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import logoImg from '../src/assets/images/logo-mv-developer.svg'

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

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" onClick={handleToggle} />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto" onSelect={handleSelect}>
                    <Nav.Link href="#home" className="ms-2">Inicio</Nav.Link>
                    <Nav.Link href="#about" className="ms-2">Sobre mí</Nav.Link>
                    <Nav.Link href="#portfolio" className="ms-2">Portafolio</Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;