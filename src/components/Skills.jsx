import "./styles/Skills.css";

import c from "../assets/icons/c.png";
import python from "../assets/icons/python.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import react from "../assets/icons/react.png";
import java from "../assets/icons/java.png";
import express from "../assets/icons/expressjs.png";
import nodejs from "../assets/icons/nodejs.png";
import tailwind from "../assets/icons/tailwind.png";
import mongodb from "../assets/icons/mongodb.png"


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
                <div className="front-end">
                    <h3>Front-end Development Kit</h3>
                    <p className="slide">
                        <img src={html} alt="" />
                        <img src={c} alt="" />
                        <img src={css} alt="" />
                        
                        <img src={java} alt="" />
                        <img src={javascript} alt="" />
                        <img src={tailwind} alt="" />
                       {/*} <img src={mongodb} alt="" />
                        <img src={express} alt="" />{*/}
                        <img src={react} alt="" />
                        <img src={nodejs} alt="" />
                    </p>
                </div>
            </div>
            
        </div>
        );
    
}
export default Skills