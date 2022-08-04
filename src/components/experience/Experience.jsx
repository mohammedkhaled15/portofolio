import React from 'react'
import "./experience.css"
import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { AiOutlineHtml5 } from "react-icons/ai"
import { SiCss3 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"

const Experience = () => {
    const [fire, setFire] = useState(false);

    const scrollHeight = () => {
        return window.scrollY >= "1100" ? setFire(true) : ""
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () => window.removeEventListener("scroll", scrollHeight);
    });

    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <div className="skills-rates">
                        <div className="progress">
                            <label>HTML5</label>
                            <AiOutlineHtml5 className='progress__icon' color='red' />
                            <span style={{ width: `${fire ? "90%" : "0"}` }}></span>
                            {<CountUp end={90} enableScrollSpy={true} duration={3} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>CSS3</label>
                            <SiCss3 className='progress__icon' color='#264de4' />
                            <span style={{ width: `${fire ? "85%" : "0"}` }}></span>
                            {<CountUp end={85} enableScrollSpy={true} duration={3} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>javaScript</label>
                            <SiJavascript className='progress__icon' color='#f0db4f' />
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={true} duration={3} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                        <div className="progress">
                            <label>ReactJs</label>
                            <GrReactjs className='progress__icon' color='#5CD0EE' />
                            <span style={{ width: `${fire ? "80%" : "0"}` }}></span>
                            {<CountUp end={80} enableScrollSpy={true} duration={3} suffix="%" scrollSpyOnce={true} className="counter" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience