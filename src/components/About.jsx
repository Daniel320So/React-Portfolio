import { useState, useEffect } from "react"
import { getImagePath, fetchSkills, fetchEducations } from "../api"
import "./About.css"

function About() {

  const [educationsData, setEducationsData] = useState(null)
  const [skillsData, setSkillsData] = useState(null)

  const updateSkillsData = async () => {
    setSkillsData(await fetchSkills())
  }

  const updateEducationsData = async () => {
    setEducationsData(await fetchEducations())
  }

  const openSource = (url) => {
    window.open(url, '_blank');
  }

  useEffect(() => {
    updateSkillsData();
    updateEducationsData();
  }, [])

  return (
    <section id="about">
      <img id="background-pattern-1" src="./images/patterns/Background_Pattern_1.png" alt="Background_Pattern_of diamonds" />
      <h2> About Me </h2>
      <div id="about-container">
        {/* <!-- Description --> */}
        <div id="description">
          <div className="description-item" id="name">
            <p>Name</p>
            <div className="description-detail">
              <p>Ho Kit So, Daniel</p>
            </div>
          </div>
          <div className="description-item" id="age">
            <p>Age</p>
            <div className="description-detail">
              <p>24</p>
            </div>
          </div>
          <div className="description-item" id="education">
            <p>Education</p>
            {educationsData && (
              <div className="description-detail">
                {
                  educationsData.map(edu => {
                    return <p key={edu.school_name}>- {edu.content}</p>
                  })
                }
              </div>
            )}
          </div>
          <div className="description-item" id="interest">
            <p>Interest</p>
            <div className="description-detail">
              <p> - Blockchain Technology</p>
              <p> - Basketball</p>
            </div>
          </div>
        </div>

        {/* <!-- Technical Knowledge--> */}
        {skillsData && (
          <div id="technical-knowledge">
            {
              skillsData.map(skill => {
                return <img key={skill.title} src={getImagePath(skill.image)} alt={skill.title} onClick={()=>openSource(skill.url)}/>
              })
            }
          </div>
        )}
      </div>
    </section>
  )
}

export default About
