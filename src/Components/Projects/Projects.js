import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Par/Particle";
import medusa from "../../Assets/Projects/medusa.png";
import stock from "../../Assets/Projects/stock.svg";
import port from "../../Assets/Projects/portfolio.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medusa}
              isBlog={false}
              title="Medusa"
              description="It is a platform to report Sexual Gender Based Violence (SGDV) incidents. It uses Bootstrap for styling, Sass for CSS pre-processing, React with JSX for the user interface, and MongoDB for the database"
              ghLink="https://github.com/serialkemu/med-usa3"
              demoLink="https://github.com/serialkemu/med-usa3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock-control"
              description=" Aweb application for stock management using ReactJSX for the UI, Bootstrap and Sass for styling, and MongoDB for the database.
This combination allows for a user-friendly interface, responsive design, and scalable data storage for your stock management system."
              ghLink="https://github.com/justus-ombati/Stock-Inventory-Control"
              demoLink="https://github.com/justus-ombati/Stock-Inventory-Control"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio"
              description="A portfolio website using React JSX for a clean component-based structure.Leveraged Tailwind CSS for rapid styling with utility classes, ensuring a responsive and modern design.This combination allows for easy maintenance and customization, making the portfolio adaptable to my needs."
              ghLink="https://github.com/serialkemu/kemu"
              demoLink="https://github.com/serialkemu/kemu"              
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
