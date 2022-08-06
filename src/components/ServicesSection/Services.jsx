import "./Services.css";
import Card from "./CardComponent/Card";
import DesignEmoji from "../../img/heartemoji.png";
import DevelopEmoji from "../../img/glasses.png";
import UIEmoji from "../../img/humble.png";
import CV from "./UmairCV.pdf";

const Services = () => {
    return (
        <div className='ServicesDiv'>
            {/* Left Side */}
            <div className="leftText">

                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo sint nam quasi sit accusamus atque, minus cum quaerat architecto, veniam distinctio perferendis debitis blanditiis sed repellat quae.</span>

                <a href={CV} download> <button className="button leftTextBtn">Download CV</button> </a>

                <div className="blur" style={{ background: "#ABF1FF94", top: "18rem", left: "-15rem" }}></div>
            </div>

            {/* Right Side */}
            <div className="rightCards">

                {/* First Card */}
                <div style={{
                    left: "14rem"
                }}>
                    <Card
                        Img={DesignEmoji} Heading={"Design"}
                        Detail={"This is roughing detatil from my end"}
                    />
                </div>

                {/* Second Card */}
                <div style={{
                    top: "12rem",
                    left: "-4rem"
                }}>
                    <Card
                        Img={DevelopEmoji} Heading={"Developer"}
                        Detail={"HTML, CSS, JavaScript, PHP, MySQL"}
                    />
                </div>

                {/* Third Card */}
                <div style={{
                    top: "19rem",
                    left: "12rem"
                }}>
                    <Card
                        Img={UIEmoji} Heading={"UI / UX"}
                        Detail={"Lorem Ipsum, Lorem Ipsun, Lorem Ipsum"}
                    />
                </div>

                <div
                    className="blur"
                    style={{ background: "var(--purple)", top: "8rem", left: "18rem" }}
                ></div>
            </div>
        </div>
    )
}

export default Services;