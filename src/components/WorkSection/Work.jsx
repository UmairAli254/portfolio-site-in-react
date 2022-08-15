import "./Work.css";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Fiverr from "../../img/fiverr.png";
import UpWork from "../../img/Upwork.png";
import Shopify from "../../img/Shopify.png";
import WordPress from "../../img/wordpress.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Work() {
    return (
        <div className='WorkSection'>
            {/* Left Sides CSS is coming from the Services Section/Component */}
            <div className="leftText Work-left-txt">
                <span>Works for all these</span>
                <span>Brands & Clients</span>
                <span>
                    I have worked on these all platforms and with dozens of clients from there. I have been doing freelancing <br /> from the last 3+ years. <br /> My clients are from around the globe and they are <br /> taking my services to make their businesses successful.
                </span>

                <Link
                    to="Contact-Section"
                    spy={true}
                    smooth={true}
                    activeClass="activeClass"
                ><button className='button leftTextBtn work-leftBtn'>Hire Me</button></Link>

                <div className="blur" style={{ background: "#ABF1FF94", top: "18rem", left: "-15rem" }}></div>
            </div>


            {/*  */}
            <div className="rightSideWork">
                <motion.div className="work-main-circle"
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}>

                    <div className="commonCircle">
                        <img src={UpWork} />
                    </div>

                    <div className="commonCircle">
                        <img src={Fiverr} />
                    </div>

                    <div className="commonCircle">
                        <img src={Amazon} />
                    </div>

                    <div className="commonCircle">
                        <img src={Shopify} />
                    </div>

                    <div className="commonCircle">
                        <img src={WordPress} />
                    </div>

                </motion.div>
                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>
    )
}
