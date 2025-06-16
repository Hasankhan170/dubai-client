import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="item  text-white text-center p-10 rounded" data-value="2"><img src="/assets/images/2.webp" alt="" /></div>,
  <div className="item text-white text-center p-10 rounded" data-value="3"><img src="/assets/images/4.avif" alt="" /></div>,
  <div className="item  text-white text-center p-10 rounded" data-value="4"><img src="/assets/images/3.webp" alt="" /></div>,
];

const Slider = () => {
  return (
    <div className="h-auto">
      <AliceCarousel
        autoPlay
        autoPlayControls={false}
        autoPlayInterval={2000}
        animationDuration={1000}
        infinite
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </div>
  );
};

export default Slider;
