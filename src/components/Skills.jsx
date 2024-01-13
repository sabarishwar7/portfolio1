import "./styles/Skills.css";

import c from "../assets/icons/c.png";
import cp from "../assets/icons/c++.svg";
import python from "../assets/icons/python.svg";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import react from "../assets/icons/react.png";
import java from "../assets/icons/java.png";
import express from "../assets/icons/expressjs.png";
import nodejs from "../assets/icons/nodejs.png";
import tailwind from "../assets/icons/tailwind.png";
import mongodb from "../assets/icons/mongodb.png"
import Figma from "../assets/icons/Figma.svg";
import dj from "../assets/icons/django.svg";


function Skills(){
    return(
        <div className="Skill-Container">
            <h2>Skills</h2>
            <div className="icon">
                {/*}<div className="uiux">
                    <h3>UI/UX Tools</h3>
                    <p className="slide">
                        <img src={c} alt="" />
                        <img src={python} alt="" />
                        <img src={html} alt="" />
                        <img src={c} alt="" />
                        <img src={c} alt="" />
                    </p>
    </div>{*/}
                
                    
                    <p className="slide">
                    <img src={c} alt="C" />
                    <img src={cp} alt="C++" />
                    <img src={html} alt="HTML 5" />
                    <img src={css} alt="CSS 3" />
                    <img src={javascript} alt="JavaScript" /> 
                    <img src={python} alt="Python" />
                    <img src={dj} alt="Django" />                        
                    {/*}<img src={tailwind} alt="Tailwind CSS" />
                    <img src={mongodb} alt="Mongo DB" />
                    <img src={express} alt="Express JS" />{*/}
                    <img src={react} alt="React" />
                    <img src={nodejs} alt="Node JS" />
                    <img src={java} alt="JAVA" />
                    <img src={Figma} alt="Figma" />
                        

                    </p>
               
            </div>
            
        </div>
        );
    
}
export default Skills