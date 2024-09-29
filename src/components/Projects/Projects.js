import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import miniCalculatorApp from "../../Assets/Projects/miniCalculatorApp.PNG";
import budgetApp from "../../Assets/Projects/budgetApp.PNG";
import netWorthCalculatorApp from "../../Assets/Projects/netWorthCalculatorApp.PNG";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} sm={12} xs={12} className="project-card" >
            <ProjectCard
              imgPath={miniCalculatorApp}
              isBlog={false}
              title="Mini Calculator App"
              description="A mini calculator web application which has simple arithmetic operations build with react and designed with vanilla css."
              ghLink="https://github.com/abishek239885/MiniCalculatorApp"
              demoLink="http://abisheksr-mini-calculator-app.vercel.app/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} xs={12} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Personal website"
              description="My personal website page build with React and React bootstrap and it has other supporting technlogies like express.js and vercel for hosting"
              ghLink="https://github.com/abishek239885/PersonalPortfolio"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} xs={12} className="project-card">
            <ProjectCard
              imgPath={budgetApp}
              isBlog={false}
              title="Budget App"
              description="The Budget Application which is helpful to add daily budgets and it uses browser local storage"
              ghLink="https://github.com/abishek239885/BudgetApp"
              demoLink="http://abisheksr-budget-app.vercel.app/"              
            />
          </Col>

          <Col lg={4} md={6} sm={12} xs={12} className="project-card">
            <ProjectCard
              imgPath={netWorthCalculatorApp}
              isBlog={false}
              title="Net Worth Calculator App"
              description="It is used to calculate the net worth from the difference between assets and liabilities which is build using react and react boostrap as the primary technlogies"
              ghLink="https://github.com/abishek239885/NetWorthCalculator"
              demoLink="http://abisheksr-net-worth-calculator.vercel.app/"
            />
          </Col>

          
           </Row>
      </Container>
    </Container>
  );
}

export default Projects;


