import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <Navbar sticky="top" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home">
          <b>Pagina Principala</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Poze Lemne</Nav.Link>
            <Nav.Link href="#">Pret Lemne</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Informatii Utile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
