import React, { useState, useEffect } from 'react';
import htmlParser from 'html-react-parser';

function Strings(file) 
{
	const stringObj = new Object();
	stringObj.Skills = ['C', 'Java', 'Python', 'C#', '.Net Core' ,'WPF', 'ASP.Net'] 	
	stringObj.Tools = ['Visual Studio', 'Github', 'SonarQube', 'Vercel', 'Azure DevOps']

	stringObj.Home2 = `I fell in love with programming and technologies and I am
		learning something daily… 👨🏻‍💻
		<br />
		<br />I am fluent in languages like
		<i>
  		<b className="purple"> C#, Java, Javascript and .Net Frameworks. </b>
		</i>
		<br />
		<br />
		My field of Interest's are building new &nbsp;
		<i>
  		<b className="purple">Web Technologies and Products </b> and
  		also in areas related to{" "}
  		<b className="purple">
    		Full Stack develpmet.
  		</b>
		</i>
		<br />
		<br />
		Whenever possible, I also apply my passion for developing products
		with <b className="purple">Node.js</b> and
		<i>
  		<b className="purple">
    		{" "}
    		Modern Javascript Library and Frameworks
  		</b>
		</i>
		&nbsp; like
		<i>
  		<b className="purple"> React.js and Angular</b>
		</i>`;

	stringObj.AboutCard = `Hello Everyone, I am <span className="purple">Abishek S R </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am currently employed as a Software developer / Programmer Analyst at HCL Tech.
            <br />
            I have completed bachelor of engineering with CGPA of <span className="purple">8.9</span>
            <br />`;


	return stringObj[file];
}


function Util(file) {
	const html = Strings(file);
	if(file === 'Skills' || file == 'Tools')
		return html;
	return <React.Fragment> {htmlParser(html)} </React.Fragment>;
}

export default Util;

