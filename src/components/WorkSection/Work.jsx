import "./Work.css";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Fiverr from "../../img/fiverr.png";
import UpWork from "../../img/Upwork.png";
import Shopify from "../../img/Shopify.png";

export default function Work() {
    return (
        <div className='WorkSection'>
            {/* Left Sides CSS is coming from the Services Section/Component */}
            <div className="leftText Work-left-txt">
                <span>Works for all these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo sint nam quasi sit accusamus atque,<br/> minus cum quaerat architecto, veniam distinctio <br/> perferendis debitis blanditiis sed repellat quae.</span>

                <button className="button leftTextBtn work-leftBtn">Hire Me</button>

                <div className="blur" style={{ background: "#ABF1FF94", top: "18rem", left: "-15rem" }}></div>
            </div>


            {/*  */}
            <div className="rightSideWork">
                <div className="work-main-circle">

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
                        <img src={Facebook} />
                    </div>

                </div>
                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>
    )
}
