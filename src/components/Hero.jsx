import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const tagLineRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {

    // Handle text animations
    let sec = 0;
    const tagLineEle = tagLineRef.current;
    for (let i = 0; i < tagLineEle.children.length; i++) {
      let ele = tagLineEle.children[i]
      setTimeout(function () {
        ele.style.display = "block";
        ele.classList.add("animate-typing1");
      }, sec)
      sec = sec + 750
      setTimeout(function () {
        ele.style.width = "fit-content";
        ele.style.animationPlayState = 'paused';
        ele.classList.remove("animate-typing1");
      }, sec)
    }

    const h1Ele = h1Ref.current;
    setTimeout(function () {
      h1Ele.style.display = "block";
      h1Ele.classList.add("animate-typing2");
    }, sec)
    sec = sec + 1000;
    setTimeout(function () {
      h1Ele.style.width = "fit-content";
      h1Ele.style.animationPlayState = 'paused';
      h1Ele.classList.remove("animate-typing2");
    }, sec)

    const pEle = pRef.current;
    setTimeout(function () {
      pEle.style.display = "block";
      pEle.classList.add("fade-in")
    }, sec)
  }, [])

  return (
    <section id="hero">
      <div id="tag-line" ref={tagLineRef}>
        <h2 className="tag-line-item" id="tag-line-1">I <span>D</span>esign, </h2>
        <h2 className="tag-line-item" id="tag-line-2"><span>D</span>evelop, </h2>
        <h2 className="tag-line-item" id="tag-line-3"><span>D</span>eploy.</h2>
      </div>
      <h1 ref={h1Ref}> I'm <span>D</span>aniel</h1>
      <p ref={pRef}> A Full Stack Developer that Turns Ideas into Reality</p>
    </section>
  )
}

export default Hero
