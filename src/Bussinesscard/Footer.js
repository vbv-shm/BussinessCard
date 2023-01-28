import "./styles.css"
import picture from"./Vaibhav.jpg"
import github from  "./GitHub Icon.png"
import twitter from  "./Twitter Icon.png"
import linkedin from  "./Linkedin Icon.png"

function Footer(){
    return <div className="footer">
        <div><img src={github} alt="github-icon"/></div>
        <div><img src={twitter} alt="github-icon"/></div>
        <div><img src={linkedin} alt="github-icon"/></div>
    </div>
}
export default Footer