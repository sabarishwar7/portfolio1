import "./Styles/Home.css";
import pic from "../assets/pic.png" ;
import { TypeAnimation } from 'react-type-animation';

function Home(){
    return(
        <div className="home">
          
           
      
           
      
            <div className="txt-home">
            <h1>HI..I'm<br/>sabarishwar</h1>
            <span><TypeAnimation 
        sequence={[
          "UI/UX designer", 1500,
          "A web Developer", 1500,
          "3D model Designer",1500,
        
      ]}
        repeat={Infinity}
      /></span>
      
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="575" height="595" viewBox="0 0 575 595" fill="none">
                <path d="M608 334.5C738 393.5 383.542 595 325 595C266.458 595 0.5 393.042 0.5 334.5C0.5 275.958 266.458 0.5 325 0.5C383.542 0.5 608 275.958 608 334.5Z" fill="white"/>
            </svg>
      
            </div>
       
        );
        
    
}
export default Home