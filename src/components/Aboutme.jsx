import "./styles/Aboutme.css"
import abt from "../assets/abtme-img.svg"
import CV from "../assets/CV.pdf"

function Aboutme(){


    const onButtonClick = () => {
        const pdfUrl = CV;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Sabarishwar_Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return(
        <div>
            <h2>About me</h2>
            <div className="container">
                <img src={abt} alt="" />
                <p id="abtme-para"><strong>Hola ! Geeks <big>😎</big></strong>Myself <i color="black">SABARISHWAR SIVAKUMAR</i> , 3<sup>rd</sup> year Computer Scinence Engineeeing Student at
                 SRM Valliammai Enginnering College . My character is one of the diligence and trustworthiness . Time management is one of my strong 
                 suit,  and I am always eager to learn new skills. I can operate both independently and collabratively .



                 <span><button className="btn"onClick={onButtonClick}>Download Resume</button></span>

               {/* who is passionate about UI/UX Designing,Front-end Developing.
                Now I mainly focusing on <i>JAVASCRIPT </i>and its Frameworks .I
                also have strong knowledge in<i> C, C++, Python ,JAVA</i> and deep understanding of Algorithms and Data Structures.
    Additionally Learning 3D Modelling . I intrested to learn something new.*/}
                

                </p>
                
            </div>
            
        </div>
        );
    
}
export default Aboutme