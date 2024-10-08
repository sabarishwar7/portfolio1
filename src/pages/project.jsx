import React from 'react'
import "./styles/project.css"
import mobpic from "../assets/mobile-app.svg"
import todo from "../assets/todo-app.svg"
import lunch from "../assets/lunch.svg"
import library from "../assets/library.svg"
import Todo from "../assets/todo.svg"


const projects = () => {
  return (
    <div className='project'>
      
      <div className="wrapper">
          <img src={mobpic} alt=""  className='grid1'/>
        
          <img src={todo} alt=""  className='grid2'/>
          <img src={Todo} alt=""  className="grid3"/>
          <img src={lunch} alt=""  className='grid4'/>
        
        <img src={library} alt=""  className='grid5'/>
        <div className="grid6">6</div>
        <div className="grid7">
          <div className="grid-btn">Github</div>
          <div className="grid-btn">Collab</div>
          <div className="grid-btn">Hire</div>
        </div>
      </div>
        
      
    </div>
  )
}

export default projects
