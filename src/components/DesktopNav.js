import { useInView } from 'react-intersection-observer';

export default function DesktopNav() {
const { ref: navbar, inView: navbarInView} = useInView();

    return (
        <div className={"component desktop-nav " + (navbarInView ? "show" : "hidden")} ref={navbar}>
        <p className="navbar-item"><a href="#skills">Skills</a></p>
        <p className="navbar-item"><a href="#projects">Projects</a></p>
        <p className="navbar-item"><a href="#experience">Experience</a></p>
        <p className="navbar-item"><a href="#about-me">About Me</a></p>
        <p className="navbar-item"><a href="#contact">Contact</a></p>
        </div>
    )
}
