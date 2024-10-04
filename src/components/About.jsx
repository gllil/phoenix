import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="p-5 my-5">
      <Row>
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h4>
            Phoenix Lawn Services provides top-notch lawn care services. We
            serve the entire Polk County, FL area with dedication and
            professionalism.
          </h4>

          <h4>
            Our team is skilled and experienced. We focus on helping homeowners
            keep their lawns clean and beautiful. Whether you need regular
            maintenance or a one-time service, we are here to help.
          </h4>

          <h4>We are licensed and insured.</h4>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
