import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import pic1 from "../../img/pic1.png";
import pic2 from "../../img/pic2.png";
import pic3 from "../../img/pic3.png";
import pic4 from "../../img/pic4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='portfolio'>
      {/* heading */}
      {/* <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span> */}
      <span>Our Dashboard</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={pic1} alt='' height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt='' height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt='' height={250} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt='' height={250} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
