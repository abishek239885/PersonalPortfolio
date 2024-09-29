import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Util from "../../Utils/Util";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {Util('AboutCard')}
          </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}> */}
          <p style={{ color: "#451f57" }}>
            "It is faster to make a four-inch mirror then a six-inch mirror than to make a six-inch mirror."
          </p>
          <footer className="blockquote-footer" style={{ color: "#451f57" }}>Abishek S R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
