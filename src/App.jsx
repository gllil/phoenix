import { Container, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import SummarySection from "./components/SummarySection";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <Container className="" fluid>
      <Row>
        <Navigation />
      </Row>
      <Row>
        <HeroImage />
      </Row>
      <Row>
        <SummarySection />
      </Row>
      <Row>
        <Services />
      </Row>
      <Row>
        <About />
      </Row>
    </Container>
  );
}

export default App;
