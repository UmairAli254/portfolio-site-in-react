import "./Services.css";
import Card from "./CardComponent/Card";
import DesignEmoji from "../../img/heartemoji.png";
import DevelopEmoji from "../../img/glasses.png";
import UIEmoji from "../../img/humble.png";
import CV from "./UmairCV.pdf";
import { motion } from "framer-motion";

// transition
const transition = { duration: 1, type: "spring" };

const Services = () => {
    return (
        <div className='ServicesDiv' id="ServicesDiv">
            {/* Left Side */}
            <div className="leftText">

                <span>My Awesome</span>
                <span>Services</span>
                <span>

                    I am providing the Web Development Servies that includes, Web Apps, E-Commerce Sites, Business Websites, LMS Sites, Portfolio Sites and many more, Just hit the Contact button and let's discuss yoru project. 
                    </span>

                <a href={CV} download> <button className="button leftTextBtn">Download CV</button> </a>

                <div className="blur" style={{ background: "#ABF1FF94", top: "18rem", left: "-15rem" }}></div>
            </div>

            {/* Right Side */}
            <div className="rightCards">

                {/* First Card */}
                <motion.div style={{
                    left: "14rem"
                }} className="s-card1"
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}>
                    <Card
                        Img={DesignEmoji} Heading={"Design"}
                        Detail={"You will get a best design for your website"}
                    />
                </motion.div>

                {/* Second Card */}
                <motion.div style={{
                    top: "12rem",
                    left: "-4rem"
                }} className="s-card2"
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}>
                    <Card
                        Img={DevelopEmoji} Heading={"Developer"}
                        Detail={"HTML, CSS, JavaScript, ReactJS, PHP, MySQL, WordPress, Shopify"}
                    />
                </motion.div>


                {/* Third Card */}
                <motion.div style={{
                    top: "19rem",
                    left: "12rem"
                }} className="s-card3"
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}>
                    <Card
                        Img={UIEmoji} Heading={"UI / UX"}
                        Detail={"The UI / UX of your App will be very user friendly"}
                    />
                </motion.div>

                <div
                    className="blur"
                    style={{
                        background: "var(--purple)",
                        top: "8rem",
                        left: "18rem"
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Services;