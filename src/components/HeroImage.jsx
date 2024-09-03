import { Col, Container, Row } from "react-bootstrap";
// import heroImg from "../assets/heroImage.png";

const HeroImage = () => {
  return (
    <Container fluid>
      <Row className="heroImageRow">
        <Col xs={12} className="p-0">
          <div id="heroImage">
            <div id="heroImageLayer" className="text-white">
              <Row>
                <Col md={8}>
                  <h1>Your Reliable Lawn Care Solution</h1>
                  <h5>
                    Professional lawn care in Polk County. From mowing to
                    hedging, we keep your lawn looking neat and fresh.
                  </h5>
                  <hr />
                  <h5>Contact us and get a free consultation.</h5>
                  <h2>(385) 377-9399</h2>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
  //return   <Image src={heroImg} fluid />;
};
export default HeroImage;
