import "./move.css"
import Marquee from "react-fast-marquee";

const Move=()=>{
    const a=["UI/UX DESIGNER","FULL STACK DEVELOPER","COMPUTER SCIENCE ENGINEERING"]
    return(
        <div className="move">
            <Marquee
  duration={30}
  pauseOnHover={true}
  direction="right"
  loop={0}
  
>
    <div className="slide1">
        <li>UI/UX Designer</li>
        <li>Full Stack Developer</li>
        <li>Computer Science Engineer</li>
  </div>

  
</Marquee>
<div className="inbet"></div>

<Marquee
  duration={30}
  pauseOnHover={true}
  direction="left"
>
    <div className="slide2">
        <li>UI/UX Designer</li>
        <li>Full Stack Developer</li>
        <li>Computer Science Engineer</li>
  </div>

  
</Marquee>
           
            

        </div>

    )
}

export default Move

