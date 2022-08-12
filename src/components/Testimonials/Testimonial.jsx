import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import Pic1 from "../../img/profile1.jpg";
import Pic2 from "../../img/profile2.jpg";
import Pic3 from "../../img/profile3.jpg";
import Pic4 from "../../img/profile4.jpg";


const allReviews = [
    {

        name: "Jane",
        img: Pic1,
        review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
        name: "Miss",
        img: Pic2,
        review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
        name: "Koan",
        img: Pic3,
        review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
        name: "Shahrukh Khan",
        img: Pic4,
        review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    }
];



const Testimonial = () => {
    return (
        <div className="Testimonial">
            <div className="testi-text">Clients always get <span> Exceptional Work</span> from me...</div>
            {/* Blur Effecta */}
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>


            {/* Testimonial Slider */}
            <div className="Testimonial-Section">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {
                        allReviews.map((ele, ind) => {
                            return (
                                <SwiperSlide key={ind}>
                                    <div className="t-data">
                                        <img src={ele.img} />
                                        <p>{ele.name}</p>
                                        <p>{ele.review}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div>






        </div >
    )
}

export default Testimonial;