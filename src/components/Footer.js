import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon-social-media" />
            <FontAwesomeIcon icon={faInstagram} className="icon-social-media" />
            <FontAwesomeIcon icon={faLinkedin} className="icon-social-media" />
            <FontAwesomeIcon icon={faGithub} className="icon-social-media" />
            <FontAwesomeIcon icon={faGoogle} className="icon-social-media" />
          </Col>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <p>© 2022 Copyright</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
