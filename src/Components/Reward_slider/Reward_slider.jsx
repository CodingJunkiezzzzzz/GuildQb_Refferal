import React, { useRef, useState } from 'react';
import './Reward_slider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import ref_picc1 from "../Assets/ref_immg1.png"
import ref_picc2 from "../Assets/ref_immg2.png"
import ref_picc3 from "../Assets/ref_immg3.png"

function Reward_slider() {
  return (
    <div>
      <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        Loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //     delay: 2000,
        //     disableOnInteraction: false,
        //   }}
        breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        modules={[ Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc1} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc2} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc3} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc1} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc2} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc3} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc1} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc2} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
        <SwiperSlide className='text-danger'>
            <div className="crtUpper">
                <img src={ref_picc3} alt="" className="slDPicSty" />
                </div> 
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Reward_slider