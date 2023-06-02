import { useInView } from 'react-intersection-observer';
export default function Experience() {
   const setting = {
    triggerOnce: true
    }; 
const { ref: realize, inView: realizeInView} = useInView(setting);
const { ref: title, inView: titleInView} = useInView(setting);
const { ref: sei, inView: seiInView} = useInView(setting);
const { ref: efl, inView: eflInView} = useInView(setting);

    return (
        <div className="component experience">
        <span className="anchor" id="experience"></span>
        <h2 className={"title " + (titleInView ? "show" : "hidden")} ref={title}>Experience</h2>
        <div className={"experience-section " + (realizeInView ? "show" : "hidden")} ref={realize}>
        <h3>Junior Developer</h3>
        <h3 className="location">Remote</h3>
        <h3>Apr 2023 - Present</h3>
        <h3>Realize Security</h3>
        <ul>
            <li>Contributing to a large codebase in developing both frontend and backend services.</li>
            <li>Collaborating and pair programming on projects using Git and GitLab.</li>
            <li>Developing full-stack applications using Test-Driven Development.</li>
        </ul>

        <p>Technologies: SvelteKit, Django, Vitest, Jest</p>

        </ div>
        <div className={"experience-section " + (seiInView ? "show" : "hidden")} ref={sei}>
        <h3>Software Engineering Immersive</h3>
        <h3 className="location">London (online)</h3>
        <h3>Oct 2022 - Jan 2023</h3>
        <h3>General Assembly</h3>
        <ul>
            <li>Built and deployed four projects, two of which are full-stack applications.</li>
            <li>Utilised agile methodologies to work as part of a team to deliver a product in short sprints.</li>
            <li>Covered the fundamentals of front-end and back-end engineering, with an introduction to best practice priciples such as SOLID, DRY, OOP and FOP.</li>
        </ul>

        <p>Technologies: React, SASS, MongoExpress, Node.js, Django, PostgreSQL.</p>


        </ div>
        <div className={"experience-section " + (eflInView ? "show" : "hidden")} ref={efl}>
        <h3>Teacher of English as a first and second language</h3>
        <h3 className="location">UK, Italy, Spain</h3>
        <h3>Jan 2018 - Sep 2022</h3>
        <h3>Freelance</h3>
        <ul>
        <li>Taught adults and children from absolute beginner to university level.</li>
        <li>Delivered classes both online and in-person, from one-to-one to groups of up to 20.</li>
        <li>Tested and analysed students’ abilities in the areas of speaking, listening, writing, reading, vocabulary and grammar.</li>
        <li>Oversaw long-term study plans to improve students’ abilities.</li>
        </ul>

        <p>Skills: communication, project management, team leadership, critical analysis.</p>
        </ div>
      </div>
    )
};
