import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Connect me through 👉</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                onClick = {() => window.location = 'mailto:abishek239885@gmail.com'}
                style={ {  color: 'white'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                onClick = {() => alert("Contact : +91 7708577230")}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlinePhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abishek-sr/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
