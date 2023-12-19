import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reachme from "./components/Reachme";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Aboutme />
      <Skills />
     {/*} <Projects /> {*/}
      <Reachme />

    </div>
    
  )
}

export default App
