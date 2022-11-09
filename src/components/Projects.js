import { Container, Row, Col } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import todoList from "../assets/image/todoList.png";
import NewsLetter from "../assets/image/signup-newsletter.png";
import websiteFilm from "../assets/image/website-film.png";
import sistemPerpustakaan from "../assets/image/sistem-informasi-perpustakaan.png";
import authenticationSecret from "../assets/image/authentication-secret.png";
import blogWebsite from "../assets/image/blog-website.png";

const servicesData = [
  {
    id: 1,
    image: todoList,
    title: "Todo List",
  },
  {
    id: 2,
    image: NewsLetter,
    title: "Newsletter App",
  },
  {
    id: 3,
    image: websiteFilm,
    title: "Website Discover Film",
  },
  {
    id: 4,
    image: sistemPerpustakaan,
    title: "Sistem Informasi Perpustakaan",
  },
  {
    id: 5,
    image: authenticationSecret,
    title: "Authentication Secret",
  },
  {
    id: 5,
    image: blogWebsite,
    title: "Blog Website",
  },
];

const Projects = () => {
  return (
    <div className="content-body">
      <Container>
        <h1 className="title-section">
          Projects<span className="text-red">.</span>
        </h1>
        <Row>
          {servicesData.map((data, index) => (
            <Col
              key={index}
              md={4}
              className="d-flex justify-content-center text-center project-row"
            >
              <ProjectsCard
                key={data.id}
                image={data.image}
                title={data.title}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
