import "./styles/bento.css"
import Github from "../assets/github.svg"
import Linkedin from"../assets/linkedin.svg"
import Behance from "../assets/behance.svg"
import Mail from "../assets/mail.svg"
import CV from "../assets/Sabarishwar_Resume.pdf"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Smart_Bus from "../assets/smart-bus.svg" 

const proj_title=["Smart Bus tracker","Voice Assistant","M3U player and Browser","Library Management","Lunch Management"]
const proj_tech=["Mobile Apllication","Mobile Apllication","Samasung TV App","Full Stack Web ", "Full Stack Web"]
const proj={
    1:{
        title: proj_title[0],
        tech: proj_tech[0],
        img: Smart_Bus
    },
    2:{
        title: proj_title[1],
        tech: proj_tech[1],
        img: "https://sabarishwar7.framer.app/voice-assistant"
    },
    3:{
        title: proj_title[2],
        tech: proj_tech[2],
        img: "https://sabarishwar7.framer.app/m3u-player-and-browser"
    },
    4:{
        title: proj_title[3],
        tech: proj_tech[3],
        img: "https://sabarishwar7.framer.app/library-management"
    },
}


const DownloadResume = () => {
    const pdfUrl = CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sabarishwar_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const goGithub = () => { 
    window.open("https://github.com/Sabarishwar7");
}

const goLinkedin = () => {
    window.open("https://www.linkedin.com/in/sabarishwar7/");
}

const goBehance = () => {
    window.open("https://www.behance.net/sabarishwar7");
}

const goMail = () => {
    window.open("mailto:sabarishwarr7@gmail.com");
}
const goDesigner=()=>{
    window.open("https://sabarishwar7.framer.website")
}
const goOld=()=>{
    window.open("https://sabarishwar7.github.io/portfolio1/")
}

    



const Bento=()=>{
    const [query,setQuery]=useState("")
    const navigate = useNavigate();
   
    const goHome=()=>{
        
        navigate("/home")
    
    }
    const goAboutme=()=>{
       
        navigate("/aboutme")
    }

    const goSkills=()=>{
        navigate("/skills")
    }
    const goProj=()=>{
        navigate("/project")
    
    }

    return(
        <div className="bento-container">
            <div className="col1">
            <div className="row1">
            <div id="home" className="anchor" onClick={goHome} style={{cursor:"pointer"}}>
                <h1>SABA HERE</h1>
            </div>
            <div id="aboutme" className="anchor" onClick={goAboutme} style={{cursor:"pointer"}}>
                AboutMe</div>
          </div>
           <div className="row2">
           <div id="academics" className="anchor" style={{cursor:"pointer"}}>
            <p>Academics</p>
            {/*<div className="academics_sub">
                <pre>
                    <br />
                    B.E.Computer Science & Engineering
                    <br/>
                    SRM Vallliammai Engineering College<span> 2021-2025 <>                           CGPA : 7.77</> </span>
                    <br/>
                   
                    
                </pre>
                </div>*/}
           </div>
           <div id="experience" className="anchor" style={{cursor:"none"}}>
            <p>Career</p>
           </div>

            
           </div>
            </div>
          
           <div className="col2">
            <div className="row4">
                <div className="box">
                <div id="resume" className="anchor" onClick={DownloadResume} style={{cursor:"pointer"}}><p>Download resume </p></div>
                
                </div>
                <div id="designer-portfolio" className="anchor"onClick={goDesigner} style={{cursor:"pointer"}}>Designer Porfolio</div>
            </div>
           <div className="row3">
           <div id="project" className="anchor" onClick={goProj}>
            <p>Project</p>
            <div className="project-sub">
                
                    {/*
                        Object.keys(proj).map((key) => {
                            return (
                                <div key={key}>
                                    <div className="proj-title">{proj[key].title}</div>
                                    <div className="proj-tech">{proj[key].tech}</div>
                                    <div className="proj-img"><img src={proj[key].img} alt="" /></div>
                                </div>
                            )
                        })
                    */}
                
                

            

            </div>
            </div> 
           <div className="row3-sub">
           <div id="skills" onClick={goSkills} style={{cursor:"pointer"}} >
            <p>Skills</p>
            </div>
           <div className="row3-sub1">
           <div id="old-portfolio" className="anchor" onClick={goOld} style={{cursor:"pointer"}}> <p>Old Portfolio</p> </div>
            <div id="icons">
            
             
            <img src={Github} alt=""  className="icon" onClick={goGithub} style={{cursor:"pointer"}}/>
             <img src={Linkedin} alt=""  className="icon" onClick={goLinkedin} style={{cursor:"pointer"}}/>
             <img src={Behance} alt=""  className="icon" onClick={goBehance} style={{cursor:"pointer"}}/>
             <img src={Mail} alt=""  className="icon" onClick={goMail} style={{cursor:"pointer"}}/>
            
                
                </div>
            </div>
           </div>           
            
           </div>
           </div>



        </div>
    )
}

export default Bento;
