function About() {

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
            <div className="description-detail">
              <p> - BBA in IS & ECON (HKUST)</p>
              <p> - Web Dev (Humber)</p>
            </div>
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
        <div id="technical-knowledge">
          <img src="./images/about/technical-knowledge.png" />
        </div>
      </div>
    </section>
  )
}

export default About
