import { Button, Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./Navbar";
import vector from "../assets/image/vector-1-header.svg";

const Intro = () => {
  return (
    <div>
      <img src={vector} className="image-vector" alt="img-vector"></img>
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <div className="intro d-flex justify-content-center align-items-center">
              <div className="text-center">
                <p>Hello!</p>
                <div className="text-intro">
                  <p>I'm Thoriq</p>
                  <p>
                    a web <span className="text-red">developer.</span>
                  </p>
                </div>
                <Button className="mt-4" id="btn-primary" size="lg">
                  Contact Me
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
