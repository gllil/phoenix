import { Col, Container, Row } from "react-bootstrap";
// import mower from "../assets/riding-lm-closeup.png";
// import hedgeTrimmer from "../assets/hedgeTrimming.png";
// import weedSpraying from "../assets/weedSpraying.png";

const Services = () => {
  return (
    <Container className="p-5 service-section my-5">
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
                <div
                  id="image-one"
                  className="service-image-border"
                  alt="lawn mowing"
                ></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center p-3">
              <h3>Lawn Mowing</h3>
              <h5>
                We provide regular mowing services to keep your lawn neat and
                healthy. Schedule a weekly or bi-weekly service.
              </h5>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="services-info my-2">
          <Row>
            <Col>
              <div className="service-image-wrapper">
                <div
                  id="image-two"
                  className="service-image-border"
                  alt="hedge trimming"
                ></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center p-3">
              <h3>Hedge Trimming</h3>
              <h5>
                We shape and maintain hedges of all sizes, ensuring they stay
                healthy and visually appealing.
              </h5>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="services-info my-2">
          <Row>
            <Col>
              <div className="service-image-wrapper">
                <div
                  id="image-three"
                  className="service-image-border"
                  alt="weed sprayer"
                ></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center p-3">
              <h3>Weed Control</h3>
              <h5>
                Effective weed control methods help maintain a weed-free lawn,
                promoting a healthy and green appearance.
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
