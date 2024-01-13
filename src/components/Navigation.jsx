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
                   <a href="/">Home</a></li>                
                <li>
                <a href="/">About me</a></li>
                <li>
                <a href="/">Skills</a></li>{/*}
                <li>
    Projects</li>{*/}
                <li>
                <a href="/">Reach Me</a></li>
            </ul>
        </div>
        
    );
}
export default Navigation