/* eslint-disable @next/next/no-img-element */
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import BackIcon from '../../../public/icons/chevron-left.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';
import UploadIcon from '../../../public/icons/upload.svg';

const MobileGallery = () => {
  const bannerData = [
    { id: 1, img: 'img1.png' },
    { id: 2, img: 'img2.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
    { id: 5, img: 'img4.png' },
  ];

  // const slidersCount = mySwiper.params.loop
  //   ? mySwiper.slides.length - 2
  //   : mySwiper.slides.length;
  // const widthParts = 100 / slidersCount;

  // $('.swiper-counter .total').html(slidersCount);
  // for (let i = 0; i < slidersCount; i++) {
  //   $('.swiper-progress-bar .progress-sections').append('<span></span>');
  // }

  // function initProgressBar() {
  //   let calcProgress =
  //     (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
  //   calcProgress += autoPlayDelay;
  //   $('.swiper-progress-bar .progress').animate(
  //     {
  //       width: '100%',
  //     },
  //     calcProgress,
  //     'linear',
  //   );
  // }

  // initProgressBar();

  // mySwiper.on('slideChange', function () {
  //   const progress = $('.swiper-progress-bar .progress');
  //   if (
  //     (this.progress == -0 || (this.progress == 1 && this.params.loop)) &&
  //     !progress.parent().is('.stopped')
  //   ) {
  //     progress.css('width', '0');
  //     if (this.activeIndex == 0) {
  //       initProgressBar();
  //     }
  //   }

  //   if (progress.parent().is('.stopped')) {
  //     progress.animate(
  //       {
  //         width: `${Math.round(widthParts * (this.activeIndex + 1))}%`,
  //       },
  //       this.params.speed,
  //       'linear',
  //     );
  //   }
  // });

  // mySwiper.on('touchMove', () => {
  //   $('.swiper-progress-bar .progress').stop().parent().addClass('stopped');
  // });

  return (
    <div className="relative -mt-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.mobile_gallery.swiper-button-prev',
          nextEl: '.mobile_gallery.swiper-button-next',
        }}
        pagination={{
          el: '.mobile_gallery_progressbar',
          type: 'progressbar',
          clickable: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        className="mobile_gallery_slider"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img src={item.img} alt="slide" className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-3 z-10 flex w-full items-center justify-between px-3">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-small"
        >
          <div className="svg_icon w-4 text-transparent">
            <BackIcon />
          </div>
        </button>
        <div className="flex gap-x-3">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-small"
          >
            <div className="svg_icon w-4 text-transparent">
              <UploadIcon />
            </div>
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-small"
          >
            <div className="svg_icon w-4 text-transparent">
              <HeartIcon />
            </div>
          </button>
        </div>
      </div>
      <div className="mobile_gallery swiper-button-prev !top-[50%] !-left-0 !mt-0 !h-[32px] !w-[32px] -translate-y-[50%] transform !text-[#fff] after:!text-[18px]" />
      <div className="mobile_gallery swiper-button-next !top-[50%] !-right-0 !mt-0 !h-[32px] !w-[32px] -translate-y-[50%] transform !text-[#fff] after:!text-[18px]" />
      <div className="mobile_gallery_progressbar !left-[50%] !top-[96%] z-[1] !h-[3px] !w-11/12 -translate-x-[50%] transform bg-[#fff] bg-opacity-70">
        {/* <div className="progress" />
        <div className="progress-sections">
          {bannerData.map((item) => (
            <span key={item.id} className="h-[2px] bg-[#99877d]" />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default MobileGallery;
