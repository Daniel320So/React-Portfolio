import { useRef, useState, useEffect } from "react"
import { fetchExperiences } from "../api"
import "./Experiences.css"

function Experiences() {

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const [experiencesData, setExperiencesData] = useState(null);
  const [display, setDisplay] = useState(0);
  
  const updateExperiencsData = async () => {
    setExperiencesData(await fetchExperiences())
  }

  const toggleExperience = (n) => {
    setDisplay(n)
    let ele1 = img1Ref.current;
    let ele2 = img2Ref.current;
    if (n == 0) {
      ele1.classList.add("experience-active")
      ele2.classList.remove("experience-active")
    } else {
      ele2.classList.add("experience-active")
      ele1.classList.remove("experience-active")
    }
  }

  const openResume = () => {
    window.open("https://drive.google.com/file/d/14NsTJoRy_WW747Re5xIWhsiAIOKlYfHQ/view?usp=share_link", '_blank');
  }

  useEffect(() => {
    updateExperiencsData();
  }, [])

  return (
    <section id="experience">
      <img id="background-pattern-2" src="./images/patterns/Background_Pattern_2.png" alt="Background_Pattern_of lines" />
      <h2 id="mobile-header"> Working Experience </h2>
      <div id="experience-image">
        <div ref={img1Ref} className="experience-image-frame experience-active" id="experience-image-frame-1" onClick={()=>toggleExperience(0)}></div>
        <div ref={img2Ref} className="experience-image-frame" id="experience-image-frame-2" onClick={()=>toggleExperience(1)} ></div>
      </div>
      { experiencesData && (
        <div id="experience-description">
          <h2> Working Experience </h2>
          <h3>{experiencesData[display].title}</h3>
          <p> @ {experiencesData[display].company}</p>
        <div id="experience-details">
          {experiencesData[display].content.split("/,").map( (c,i) => {
            return <p className="" key={c}>{c}</p>
          })}
        </div>
        <button id="btn-resume" onClick={()=>openResume()}>View Resume</button>
        </div>
      )}
    </section>
  )
}
  
export default Experiences
  