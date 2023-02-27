import { useInView } from 'react-intersection-observer';
export default function Experience() {
   const setting = {
    triggerOnce: true
    }; 
const { ref: title, inView: titleInView} = useInView(setting);
const { ref: sei, inView: seiInView} = useInView(setting);
const { ref: efl, inView: eflInView} = useInView(setting);
const { ref: lindamood, inView: lindamoodInView} = useInView(setting);

    return (
        <div className="component experience">
        <span className="anchor" id="experience"></span>
        <h2 className={"title " + (titleInView ? "show" : "hidden")} ref={title}>Experience</h2>
        <div className={"experience-section " + (seiInView ? "show" : "hidden")} ref={sei}>
        <h3>Software Engineering Immersive</h3>
        <h3 className="location">London (online)</h3>
        <h3>Oct 2022 - Jan 2023</h3>
        <h3>General Assembly</h3>
        <p>12-week immersive course taken over Zoom and Slack covering the 
        fundamentals of frontend and backend web development. 
        It consisted of daily standups, lectures, workshops, pair coding, 
        daily homework, and four projects.</p>
        </ div>
        <div className={"experience-section " + (eflInView ? "show" : "hidden")} ref={efl}>
        <h3>Freelance teacher of English as a first and second language</h3>
        <h3 className="location">UK, Italy, Spain</h3>
        <h3>Jan 2018 - Sep 2022</h3>
        <h3>Freelance</h3>
        <ul>
        <li>Taught adults and children from absolute beginner to university level.</li>
        <li>Delivered classes both online and in-person, from one-to-one to groups of up to 20.</li>
        <li>Tested and analysed students’ abilities in the areas of speaking, listening, writing, reading, vocabulary and grammar.</li>
        <li>Oversaw long-term study plans to improve students’ abilities.</li>
        </ul>
        </ div>
        <div className={"experience-section " + (lindamoodInView ? "show" : "hidden")} ref={lindamood}>
        <h3>Clinician and Tester</h3>
        <h3 className="location">London</h3>
        <h3>Jul 2017 - Dec 2018</h3>
        <h3>Lindamood-Bell Learning Processes</h3>
        <ul>
            <li>Tutored students of all ages and abilities in English and Maths, working mostly with children with learning and behavioural differences.</li>
            <li>Assessed students' behaviour and abilities in real-time and adjusted teaching approach accordingly.</li>
            <li>Administered and scored pre and post-course psychometric tests to assess learning progress.</li>
        </ul>

        </ div>
      </div>
    )
};
