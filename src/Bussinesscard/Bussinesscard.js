import "./styles.css";
import Image from "./Image.js";
import AllTextContent from "./AllTextContent";
import Footer from './Footer';

function BCard(){
    return <div className="outer-area"> 
    <div className="Bcard">
        <Image/>
        <AllTextContent/>
        <Footer/>
        </div>
        </div>
}
export default BCard