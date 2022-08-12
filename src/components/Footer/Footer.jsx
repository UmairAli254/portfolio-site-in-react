import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

export default function Footer() {
    return (
        <div className='Footer' >
            <img src={Wave} style={{ width: "100%", pointerEvents: "none" }} />
            <div className="f-content">
                <span><a href="linkto:BehalfUmair@Gmail.Com">BehalfUmair@Gmail.Com</a></span>
                <div className="f-icons">
                    <a href="#" ><img src={Github} alt="Github" /></a>
                    <a href="#" ><img src={Linkedin} alt="Linkedin" /></a>
                    <a href="#" ><img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>
        </div >
    )
}
