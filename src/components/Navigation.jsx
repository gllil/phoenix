import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <img src={logo} width="200" alt="Phoenix Lawn Services logo" />

          <h1 className="d-none d-sm-block">Phoenix Lawn Services</h1>
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            className="d-none d-md-block"
            href="mailto:phxlawnservices@gmail.com"
          >
            <h4>
              <i className="bi bi-envelope"></i> Email Me
            </h4>
          </Nav.Link>
          <Nav.Link
            className="d-md-none"
            href="mailto:phxlawnservices@gmail.com"
          >
            <h1>
              <i className="bi bi-envelope"></i>
            </h1>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
