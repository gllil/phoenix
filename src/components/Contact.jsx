import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid>
      <Row className="heroImageRow">
        <Col xs={12} className="p-0">
          <div id="contactImage">
            <div
              id="contactImageLayer"
              className="d-flex justify-content-center"
            >
              <Row>
                <Col className="text-center">
                  <h1>Transform Your Lawn Today</h1>
                  <h3>
                    Choose Phoenix Lawn Services for your lawn care needs.
                  </h3>
                  <h3>(385) 377-9399</h3>
                  <a
                    className="text-black link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    href="mailto:phxlawnservices@gmail.com"
                  >
                    <h3>PhxLawnServices@gmail.com</h3>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
