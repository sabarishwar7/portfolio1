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
          "computer Science Engineer", 1500,
          "3D model Designer",1500,
        
      ]}
        repeat={Infinity}
      /></span>
      
      </div>
      
      
                <img src={pic} alt=""  className="pic"/>
      
            </div>
       
        );
        
    
}
export default Home