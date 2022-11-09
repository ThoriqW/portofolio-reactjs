import { Container, Col, Row } from "react-bootstrap";
import profilePic from "../assets/image/profil1.jpg";

const About = () => {
  return (
    <div className="content-body">
      <Container>
        <h1 className="title-section">
          About<span className="text-red">.</span>
        </h1>
        <div className="profile-about">
          <Row>
            <Col md={8} className="d-flex flex-column justify-content-center">
              <h2>Moh Thoriq Wajedi</h2>
              <p>Web Developer</p>
            </Col>
            <Col md={4} className="img">
              <img className="img-profile" src={profilePic} alt="profile"></img>
            </Col>
            <Col md={12} className="d-flex-column mt-4">
              <p className="justify">
                Hello, Thoriq is a freelance and a full-stack web developer
                based in Palu with a passion building a custom and responsive
                website. when not online, he loves watching movies and play some
                games to having fun.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
