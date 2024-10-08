import './styles/home.css';
import React,{useEffect,useRef} from 'react';
import pic from "../assets/homepic.png"


const Home=()=>{
    const containerRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {
      resizeText();
  
      window.addEventListener("resize", resizeText);
  
      return () => {
        window.removeEventListener("resize", resizeText);
      };
    }, []);
  
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;
  
      if (!container || !text) {
        return;
      }
  
      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;
  
      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";
  
        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }
  
      text.style.fontSize = max + "px";
    };

    return(
<div className="home" ref={containerRef}>
    <div className="txt1">
        <h1 >HOLA</h1>
        <h1>GEEKS</h1>
    </div>
    <img src={pic} className='saba-img'/>
    <img src={pic} className='saba-img-bg'/>
    <div className="txt2">
        <span className='name' id="im">I'm</span>
        <h1 className='name' ref={textRef}>SABARISHWAR</h1>
    {  /*  <h1 id='surename'>SIVAKUMAR</h1>*/}
    </div>

</div>
)

}
export default Home