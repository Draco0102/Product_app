import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.scss'; // Import custom CSS for styling
import banner1 from '../../assests/images/banner/banner1.jpg'
import banner2 from '../../assests/images/banner/banner2.jpg'
import banner3 from '../../assests/images/banner/banner3.jpg'
import ArrowButton from './ArrowButton';
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowButton direction="left" />,
    nextArrow: <ArrowButton direction="right" />
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Image 1" />
      </div>
      <div>
        <img src={banner2} alt="Image 2" />
      </div>
      <div>
        <img src={banner3} alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Banner;