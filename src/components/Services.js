import { Container, Row, Col } from "react-bootstrap";
import ServicesCard from "./ServicesCard";
import iconWebDesign from "../assets/icon/internet-browser.png";
import iconWebDev from "../assets/icon/programming.png";
import iconWebResponsive from "../assets/icon/monitor.png";

const servicesData = [
  {
    id: 1,
    icon: iconWebDesign,
    title: "UI/UX Designer",
    subTitle:
      "Design your website looks good as much I can do with CSS, HTML, Bootstrap and more.",
  },
  {
    id: 2,
    icon: iconWebDev,
    title: "Web Development",
    subTitle:
      "Build a quality website with the best technology and optimization on search engines.",
  },
  {
    id: 3,
    icon: iconWebResponsive,
    title: "Full Responsive",
    subTitle:
      "create a responsive website that can be suitable for a variety of devices",
  },
];

const Services = () => {
  return (
    <div className="content-body">
      <Container>
        <h1 className="title-section">
          Services<span className="text-red">.</span>
        </h1>
        <Row>
          {servicesData.map((data, index) => (
            <Col
              key={index}
              md={4}
              className="d-flex justify-content-center text-center"
            >
              <ServicesCard
                key={data.id}
                title={data.title}
                subTitle={data.subTitle}
                image={data.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
