import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" style={{ width: '50px', height: '50px'}} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                                                          <Nav.Link href="#projects"
                                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('projects')}>Owner</Nav.Link>
                        <Nav.Link href="#connect"
                                  className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('connect')}>Feature</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                <button>
                    <a href='http://192.168.1.11:3001'>
                    <span>Demo App Dummy</span>
                    </a>
                </button>
            </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
