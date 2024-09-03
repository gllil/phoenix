import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <img
            src={logo}
            width="150"
            height="150"
            className=""
            alt="Phoenix logo"
          />
          <h1>Phoenix Lawn Services</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Navigation;
