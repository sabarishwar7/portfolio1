import './App.css'
import { Route,Routes } from 'react-router-dom'
import Bento from './pages/bento'
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import Project from './pages/project'
//import Academics from './pages/academics'
//import Experience from './pages/experience'
import Skills from './pages/skills'


function App() {
  

  return (
    <>
      
            <Routes>
                <Route path="/" element={<Bento />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
              
                <Route path="/project" element={<Project />} />
               {/*} <Route path="/contact" element={<Contact />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/experience" element={<Experience />} /> */}
            </Routes>
      
      
     
    </>
  )
}

export default App
