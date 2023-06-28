import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "react-bootstrap";
export default function Index() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              height: "650px",
              backgroundImage: `url("https://images.pexels.com/photos/6621281/pexels-photo-6621281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "650px",
              backgroundImage: `url("https://images.pexels.com/photos/6621331/pexels-photo-6621331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "650px",
              backgroundImage: `url( "https://images.pexels.com/photos/4110340/pexels-photo-4110340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
