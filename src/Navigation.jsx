import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Styles/HeaderStyles/Header.css';

function Navigation() {
  return (
    <Navbar fixed="top" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <b>Pagina Principala</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/poze" className="nav-link">Poze Lemne</Link>
            <Link to="/pret" className="nav-link">Pret Lemne</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/info" className="nav-link">Informatii Utile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;