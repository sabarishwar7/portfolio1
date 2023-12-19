import {Link} from "react-router-dom";
import { useState } from "react";
import "./Styles/nav.css"


function Navigation(){
    
    const [color, setColor]=useState(false)
    const changeColor =( ) => {
        if(window.scrollY >=1)
        {
            setColor(true)
        }
        else{
            setColor(false)
        }

    }
    window.addEventListener('scroll',changeColor)
    return(
        <div className={color?"nav-sticky":"nav-container"}>
        
            <p className="saba">SABA</p>
            <ul>
                <li>
                    Home</li>                
                <li>
                    About me</li>
                <li>
                    Skills</li>{/*}
                <li>
    Projects</li>{*/}
                <li>
                    Reach me</li>
            </ul>
        </div>
        
    );
}
export default Navigation