import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
// import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/wahab.jpg";
import profilePic3 from "../../img/saif.jpg";
import profilePic4 from "../../img/profile2.jpg";

const Testimonial = () => {
  const clients = [
    // {
    //   img: profilePic1,
    //   Name: "Wahab Khan",
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
    {
      img: profilePic2,
      Name: "Abdul Wahab Khan",

      review:
        "My name is Wahab Khan. I’m the Web-developer at Smart Solutions. I’ve created over a dozen apps designed to streamline sales and marketing activities for busy professionals. I see myself as a relentless problem-solver, and I’m always looking for a new challenge.",
    },
    {
      img: profilePic3,
      Name: "Syed Saif",

      review:
        "My name is Syed Saif. I’m the Graphic designer at Smart Solutions. I’ve created over a dozen apps designed to streamline sales and marketing activities for busy professionals. I see myself as a relentless problem-solver, and I’m always looking for a new challenge.",
    },
    {
      img: profilePic4,
      Name: "Rushda Khan",
      review:
        "My name is Rsudha Khan. I’m the  product development manager at Smart Solutions. I’ve created over a dozen apps designed to streamline sales and marketing activities for busy professionals. I see myself as a relentless problem-solver, and I’m always looking for a new challenge.",
    },
  ];

  return (
    <div className='t-wrapper' id='testimonial'>
      <div className='t-heading'>
        <span>Our </span>
        <span>Team </span>
        <span>Members... </span>
        <div
          className='blur t-blur1'
          style={{ background: "var(--purple)" }}
        ></div>
        <div className='blur t-blur2' style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='testimonial'>
                <img src={client.img} alt='' />
                <br />
                <p> {client.Name} </p>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
