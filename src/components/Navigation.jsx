import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block"
            alt="Phoenix logo"
          />
          Phoenix Lawn Services
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;
