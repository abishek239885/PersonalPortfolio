import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "./Experience";

function About() {
  return (
    <>
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to know <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "70px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          <strong className="purple">Skills </strong> I Know
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}
        <h1 className="project-heading">
          <strong className="purple">My</strong> Experience
        </h1>
        <Experience />

        {/* <Github /> */}
      </Container>
    </Container>
    <h1 className="project-heading" style={{color:'rgba(39, 159, 165, 0.87)'}}>
    <strong className="purple">Skills </strong> I Know
  </h1>

  <Techstack />

  <h1 className="project-heading" style={{color:'rgba(39, 159, 165, 0.87)'}}>
    <strong className="purple">Tools</strong> I use
  </h1>
  <Toolstack />
  </>
  );
}

export default About;
