import emailIcon from '../assets/black-icons/email-icon.png'

export default function Contact() {
    return (
        <container id="contact" className="component contact">
        <h2>Contact</h2>
        <div className="section">
        <img alt="email icon" src={emailIcon} />
        <p>samcurteis@gmail.com</p>
        </div>
        <div className="section">
        <i class="devicon-github-original"></i>
        <p>/samcurteis</p>
        </div>
        <div className="section">
        
        <i class="devicon-linkedin-plain"></i>
        <p>/in/samcurteis</p>
        </div>
        </container>
    )
};
