import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Util from "../../Utils/Util";

function GetSkills()
{
	const skillsArr = Util("Skills")
	let skillCards = []
	for(let i in skillsArr)
	{
		skillCards.push(<Col xs={3} sm={3} md={1} 
		style={{
			background:"#451f57", 
			margin:"1rem", 
			alignItems: "center", 
			width:"170px", 
			border:'3px solid #ccc',
			borderRadius:'20px',
			color:'white' }}>
		{skillsArr[i]}
		</Col>)
	}
	debugger;
	return skillCards
} 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       {GetSkills()}
    </Row>
  );
}

export default Techstack;
