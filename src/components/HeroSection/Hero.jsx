import "./Hero.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import BlueVector from "../../img/Vector1.png";
import YellowVector from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import GlsssesEmoji from "../../img/glassesemoji.png";
import ThumbUp from "../../img/thumbup.png";
import FloatingDiv from "./FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const transition = { duration: 2, type: "spring" };

function Hero() {
    return (
        <div className="hero-section">
            <div className="h-left">
                <div className="h-left-text">
                    <span>Hey, I Am</span>
                    <span>Umair Ali</span>
                    <span>Full Stack Developer with high level of experience in Web Development and Designing. Producing the quality work</span>
                </div>
                
                <Link
                        to="Contact-Section"
                        spy={true}
                        smooth={true}
                        activeClass="activeClass"
                    ><button className='button h-left-btn'>Hire Me</button></Link>

                <div className="social-links">
                    <a href="https://github.com/UmairAli254" target="_blank" className="imgLinks">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/umair-ali-wordpress/" target="_blank" className="imgLinks">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="https://www.instagram.com/umair_ali254" target="_blank" className="imgLinks">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="h-right">
                <img src={BlueVector} />
                <img src={YellowVector} />
                <img src={Boy} />

                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={GlsssesEmoji} />

                <motion.div style={{ top: "-4%", left: "68%" }} className="floatingDiv"
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}>

                    <FloatingDiv Img={Crown} Text1={"Web"} Text2={"Developer"} />
                </motion.div>

                <motion.div style={{ top: "18rem", left: "0rem" }} className="floatingDiv"
                initial={{ left: "9rem", top: "18rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}>
                    
                    <FloatingDiv Img={ThumbUp} Text1={"Best Dsign"} Text2={"Reward"} />
                </motion.div>

                {/* Blur Div */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem"
                    }} >

                </div>

            </div>
        </div>
    )
}

export default Hero;