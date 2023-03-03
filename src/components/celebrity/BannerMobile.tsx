/* eslint @next/next/no-img-element: "off" */
/* eslint react/no-array-index-key: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { useState } from 'react';
import { Autoplay, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerVideoPopover from './popovers/BannerVideoPopover';

import 'swiper/css';
import 'swiper/css/effect-cube';

const BannerMobile = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="relative -mt-8 bg-[#1C1C25] pt-8 lg:mt-0 lg:pt-0">
        <div className="container">
          <div className="relative z-[2] flex flex-wrap lg:flex-nowrap">
            <div className="mt-8 mb-4 w-full lg:w-1/2">
              <div className="-ml-6 max-w-[200px] sm:-ml-8 sm:max-w-[250px]">
                <img src="/live-session.png" alt="Live Session" />
              </div>
              <h1 className="-mt-3 text-3xl font-bold text-white sm:-mt-3 sm:text-[58px]">
                GET THE BEST
              </h1>
              <div className="-ml-4 -mt-2 max-w-[270px] sm:-mt-2 sm:-ml-6 sm:max-w-[400px]">
                <img src="/celebrity-gold.png" alt="Live Session" />
              </div>
              <h1 className="-mt-2 text-3xl font-bold text-white sm:-mt-0 sm:text-[58px]">
                EXPERIENCE
              </h1>
              <div className="mt-4 max-w-[450px]">
                <img src="/celebrity-name.png" alt="Live Session" />
              </div>
              <div className="max-w-[440px]">
                <img src="/celebrity-talent.png" alt="Live Session" />
              </div>
              <button
                type="button"
                className="purple_gradient_bg_light relative z-[1] flex h-[46px] w-auto items-center rounded-[10px] px-5 lg:h-[56px] lg:px-10"
              >
                <span className="block w-full text-sm font-semibold text-white lg:text-base">
                  GET STARTED
                </span>
                <span className="ml-2 block max-w-[20px] lg:max-w-[25px]">
                  <img src="/icons/arrow-right.png" className="w-full" alt="" />
                </span>
              </button>
              <div className="-ml-[50%] -mt-[16%]">
                <img src="/zig-zag-line.png" alt="Live Session" />
              </div>
            </div>
            <div className="flex w-full items-center justify-end lg:w-1/2">
              <Swiper
                slidesPerView="auto"
                spaceBetween={0}
                modules={[Autoplay, EffectCube]}
                autoplay
                effect="cube"
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                className="flex flex-wrap lg:-mb-[20%] lg:max-w-[550px] xl:-mb-[15%]"
              >
                {[...Array(6)].map((info, index) => (
                  <SwiperSlide key={index} className="!w-full">
                    <div className="relative">
                      <p className="absolute top-4 left-10 text-lg text-white opacity-80">
                        From <strong>US$254</strong>
                      </p>
                      <img src="/slider-video-poster.jpg" alt="Video Poster" />
                      <button
                        type="button"
                        className="absolute left-[50%] top-[50%] max-w-[65px] translate-x-[-50%] translate-y-[-50%] transform"
                        onClick={() => setShowVideo(true)}
                      >
                        <img src="/banner-play.png" alt="Play" />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="absolute right-0 -bottom-5 z-[1] hidden h-full max-w-[500px] sm:block">
          <img src="/banner-side.png" alt="banner" className="h-full w-auto" />
        </div>
      </div>
      <BannerVideoPopover
        status={showVideo}
        onClose={() => setShowVideo(false)}
      />
    </>
  );
};
export default BannerMobile;
