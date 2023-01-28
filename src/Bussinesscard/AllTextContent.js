import "./styles.css"
import icon from "./mail.png"

function AllTextContent(){
    return <div className="text-container">
        <div className="name">Vaibhav sharma</div>
        <div className="designation">Frontend Developer</div>
        <div className="website-link">My website</div>
        <button className="button"><img className="email-img" src={icon} alt="email"/><div className="email-text">Email</div></button>
        <div className="about">About</div>
        <div className="about-content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
        <div className="interests">Interests</div>
        <div className="interets-content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
        
    </div>
}
export default AllTextContent