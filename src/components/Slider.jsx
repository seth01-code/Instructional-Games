import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./slider.css";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "../assets/ppimg.jpg";

const Slider = ({ feedback, presetFeedback }) => {
  // Combine preset feedback with user-provided feedback
  const allFeedback = [...presetFeedback, ...feedback];

  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView:1 ,
          spaceBetween: 5,
        },
        700: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      autoplay={{ delay: 3000 }}
      modules={[FreeMode, Pagination, Autoplay]}
    >
      {allFeedback.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white flex flex-col gap-10 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] sm:h-[400px] sm:w-[300px] md:h-[400px] md:w-[250px] overflow-hidden">
            <img src={Image} alt="Avatar" className="w-20 h-20 rounded-full" />
            <div className="">
              <h4 className="mb-2 capitalize">
                <b className="text-purple-600 text-[1.7rem]">{item.name}</b>
              </h4>
              <p className="text-black text-[1.1rem] mb-[3rem]">{item.email}</p>
              <p className="text-purple-900">{item.comment}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
