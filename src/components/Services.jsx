import { Col, Container, Row } from "react-bootstrap";
// import mower from "../assets/riding-lm-closeup.png";
// import hedgeTrimmer from "../assets/hedgeTrimming.png";
// import weedSpraying from "../assets/weedSpraying.png";

const Services = () => {
  return (
    <Container className="p-5 service-section">
      <Row>
        <Col className="text-center">
          <h1>Our Services</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="services-info my-2">
          <Row>
            <Col>
              <div className="service-image-wrapper">
                <div id="image-one" className="service-image-border"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center p-1">
              <h3>Lawn Mowing</h3>
              <p></p>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="services-info my-2">
          <Row>
            <Col>
              <div className="service-image-wrapper">
                <div id="image-two" className="service-image-border"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Col>
        <Col md={4} className="services-info my-2">
          <Row>
            <Col>
              <div className="service-image-wrapper">
                <div id="image-three" className="service-image-border"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
