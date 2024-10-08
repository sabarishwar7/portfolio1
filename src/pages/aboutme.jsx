import React from 'react'
import "./styles/aboutme.css"
import Move from '../components/move'

export default function Aboutme() {
  return (
    <div className='abt-me'>
        <div className="slide-header">
            <Move/>
        </div>
        <div className="main-abt">
            <div className="abt-card">
                
            </div>
            <div className="abt-content">
            <p id="abtme-para"><strong>Hola ! Geeks <big>😎</big></strong>I'm SABARISHWAR SIVAKUMAR , 
            Final year Computer Science Engineeeing Student at SRM Valliammai Enginnering College . My character is one of the diligence and trustworthiness .
             Time management is one of my strong suit,  and I am always eager to learn new skills. I can operate both independently and collabratively .
                <span>
                    <button className="btn">Download Resume</button>
                </span>
            </p>
            </div>
        </div>
      
    </div>
  )
}
