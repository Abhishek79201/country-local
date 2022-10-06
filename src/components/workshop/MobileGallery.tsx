/* eslint-disable @next/next/no-img-element */

import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MobileGallery = () => {
  const bannerData = [
    { id: 1, img: 'img1.png' },
    { id: 2, img: 'img2.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
    { id: 5, img: 'img4.png' },
  ];

  return (
    <div className="relative -mt-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: '.mobile_gallery.swiper-button-prev',
          nextEl: '.mobile_gallery.swiper-button-next',
        }}
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img src={item.img} alt="slide" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-5 z-10 flex items-center justify-between px-5">
        <button type="button">back</button>
        <div className="flex">
          <button type="button">heart</button>
          <button type="button">share</button>
        </div>
      </div>
      <div className="mobile_gallery swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
      <div className="mobile_gallery swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
    </div>
  );
};

export default MobileGallery;
