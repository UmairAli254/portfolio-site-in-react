import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HOC from "../../img/hoc.png";
import Sidebar from "../../img/sidebar.png";
import eCommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";

export default function Portfolio() {
    return (
        <div className="Portfolio-Section" id="Portfolio-Section">

            <span>Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio"
            >
                <SwiperSlide>
                    <a href={Sidebar} target="_blank">
                        <img src={Sidebar} />
                    </a>

                </SwiperSlide>
                <SwiperSlide>
                    <a href={HOC} target="_blank">
                        <img src={HOC} />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={eCommerce} target="_blank">
                        <img src={eCommerce} />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={MusicApp} target="_blank">
                        <img src={MusicApp} />
                    </a>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}
