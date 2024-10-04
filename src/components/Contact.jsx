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
                  <div className="w-100">
                    <h5 className="text-center w-50 mx-auto">
                      Call or email us with your location and approximate
                      dimensions of your lawn for a free quote.
                    </h5>
                  </div>

                  <h3>(385) 377-9399</h3>
                  <a
                    className="text-black link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    href="mailto:phxlawnservices@gmail.com"
                  >
                    <h3>PhxLawnServices@gmail.com</h3>
                  </a>
                  <h3>Licensed & Insured</h3>
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
