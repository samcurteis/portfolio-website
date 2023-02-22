import emailIcon from '../assets/black-icons/white-email-icon.png'

export default function Contact() {
    return (
        <div className="component contact">
        <span className="anchor" id="contact"></span>
        <h2>Contact</h2>
        <a href="mailto:samcurteis@gmail.com">
<div className="section">        <img alt="email icon" src={emailIcon} />
        <p>samcurteis@gmail.com</p>
        </div></a>
        <a href="https://github.com/samcurteis">
<div className="section">        <i className="devicon-github-original"></i>
        <p>/samcurteis</p>
        </div></a>
        <a href="https://www.linkedin.com/in/samcurteis/">
<div className="section">        
        <i className="devicon-linkedin-plain"></i>
        <p>/in/samcurteis</p>
        </div></a>
        </div>
    )
};
