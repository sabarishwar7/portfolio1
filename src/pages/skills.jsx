import React from 'react'
import svg from '../assets/skills.svg'

const Skills = () => {
  return (
    <div style={{backgroundColor:"white" , height:"100%", width:"100%",display:"flex",justifyContent:"center", alignItems:"center"}}>
      <img src={svg} alt="" style={{backgroundColor:"white", borderRadius:55 ,border:"2px solid white"}}/>
      
    </div>
  )
}

export default Skills
