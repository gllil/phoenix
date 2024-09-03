import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <img src={logo} width="200" alt="Phoenix Lawn Services logo" />

          <h1 className="d-none d-sm-block">Phoenix Lawn Services</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;
