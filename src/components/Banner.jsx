import React from 'react'
import  banner from '../assets/img/banner.webp'
import  banner1 from '../assets/img/banner1.jpg'
import  banner2 from '../assets/img/banner2.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pasta from '../assets/img/pasta.jpg'

export const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
     <div className="  ">
      <Slider {...settings}>
        <div >
       <img  src={pasta} className='w-[200%] h-[400px]' alt="" />
       <div className="">

       </div>
        </div>
        <div>
       <img src={banner1} className='w-[200%] h-[400px]'  alt="" />
          
        </div>
        <div>
        <img src={banner2} className='w-[200%] h-[400px]' alt="" />
       
        </div>
       
      </Slider>
    </div>
    
    
    </>
  )
}
