import { Col, Container, Image, Row } from "react-bootstrap";
import ridingLawnMower from "../assets/ridingLawnMower.png";

const SummarySection = () => {
  return (
    <Container id="summarySection">
      <Row>
        <Col md={6} className="p-5">
          <div>
            <h1>Transform Your Lawn with Phoenix Lawn Services</h1>
            <h5>
              Based in Polk County, FL, Phoenix Lawn Services offers expert care
              for your lawn. Our team ensures your outdoor space looks its best.
              Trust us for all your lawn care needs.
            </h5>
          </div>
        </Col>
        <Col md={6} className="p-5 d-flex align-items-center">
          <Image src={ridingLawnMower} width="100%" />
        </Col>
      </Row>
    </Container>
  );
};
export default SummarySection;
