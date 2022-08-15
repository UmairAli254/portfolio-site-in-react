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
                    <a href="https://github.com/UmairAli254" target="_blank"><img src={Github} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/umair-ali-wordpress/" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
                    <a href="https://www.instagram.com/umair_ali254" target="_blank" ><img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>
        </div >
    )
}
