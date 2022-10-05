import { motion } from 'framer-motion';
import Image from 'next/image';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper } from '../../utilities/animations';
import useViewport from '../../hooks/useViewport';

import 'swiper/css';

import Arrow from '../../../public/icons/purple-arrow.svg';
import StarIcon from '../../../public/icons/star.svg';
import Verify from '../../../public/icons/black-verify.svg';
import Sheild from '../../../public/icons/sheild.svg';

const AvailableDate = () => {
  const { width } = useViewport();

  return (
    <motion.div
      className="container pb-10 pt-4 md:pb-20"
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h1 className="pb-3 text-2xl font-bold md:text-3xl lg:text-[38px]">
        Choose from
        <span className="purple_gradient_text"> available dates</span>
      </h1>
      <h5 className="text-base font-medium">4 available</h5>
      {width > 1063 ? (
        <div className="flex flex-wrap items-center justify-between pt-10 pb-10">
          {[1, 2, 3].map((item) => (
            <div
              className="flex w-[32%] flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px] bg-white shadow-spread"
              key={item}
            >
              <div className="w-2/3 p-5">
                <h3 className="py-0 text-base font-semibold text-[#222]">
                  Tue, 2 Jul
                </h3>
                <h4 className="mb-4 text-[12px] font-medium">
                  7:30 am - 8:00 am(IST)
                </h4>
                <a
                  href="#"
                  className="mb-3 text-[12px] text-[#222] underline hover:text-[#E71575]"
                >
                  Book for a private group?
                </a>
                <div className="mt-4 flex items-center  gap-4">
                  <button
                    type="button"
                    className="purple_gradient_bg flex h-[40px] w-[115px] items-center justify-center rounded text-[14px] font-bold text-[#fff]"
                  >
                    Select
                  </button>

                  <p className="text-base text-[#808080]">
                    <span className="text-[#E71575]">$45 </span>
                    <span>/ person</span>
                  </p>
                </div>
              </div>
              <div className="flex w-1/3 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#1C1C25]">
                <Image
                  src="/icons/yellow-love.png"
                  width={70}
                  height={70}
                  alt="review 1"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="-mr-5 -ml-2 md:mr-0">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            freeMode
            modules={[FreeMode]}
            className="flex flex-wrap !pr-5 md:!pr-0"
          >
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item} className="!w-[97%] md:!w-[68%]">
                <div className="mx-2 my-5 flex flex-wrap items-stretch justify-between overflow-hidden rounded-[10px] bg-white shadow-spread md:mx-3 md:flex-nowrap">
                  <div className="w-[78%] p-3 md:w-2/3 md:p-5">
                    <h3 className="py-0 text-base font-semibold text-[#222]">
                      Tue, 2 Jul
                    </h3>
                    <h4 className="mb-4 text-[12px] font-medium">
                      7:30 am - 8:00 am(IST)
                    </h4>
                    <a
                      href="#"
                      className="mb-3 text-[12px] text-[#222] underline hover:text-[#E71575]"
                    >
                      Book for a private group?
                    </a>
                    <div className="mt-4 flex items-center  gap-4">
                      <button
                        type="button"
                        className="purple_gradient_bg flex h-[40px] w-[115px] items-center justify-center rounded text-[14px] font-bold text-[#fff]"
                      >
                        Select
                      </button>

                      <p className="text-sm text-[#808080]">
                        <span className="text-[#E71575]">$45 </span>
                        <span>/ person</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[22%] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#1C1C25] md:w-1/3">
                    <Image
                      src="/icons/yellow-love.png"
                      width={width > 768 ? 70 : 40}
                      height={width > 768 ? 70 : 40}
                      alt="review 1"
                      className="w-[10px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-y-5 pt-8 md:mt-16 md:gap-y-0 xl:px-7">
        {[1, 2].map((item) => (
          <div className="w-full md:w-[49%]" key={item}>
            <div className="flex flex-wrap overflow-hidden rounded-[10px] shadow-spread md:flex-nowrap">
              <div
                className="flex h-[140px] w-full shrink-0 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat md:h-auto md:max-w-[140px] lg:max-w-[155px]"
                style={{ backgroundImage: `url(/review-headshot-${item}.jpg)` }}
              />
              <div className="w-full p-5">
                <div className="flex flex-wrap items-center justify-between">
                  <h1 className="text-[18px] font-semibold text-[#000]">
                    Hosted by The
                  </h1>
                  <a
                    href="#"
                    className="flex items-center text-[12px] font-semibold text-[#E71575]"
                  >
                    See Profile
                    <div className="svg_icon w-3">
                      <Arrow />
                    </div>
                  </a>
                </div>
                <div className="text-[10px] text-[#808080] xl:text-xs">
                  Joined in February 2017
                </div>
                <div className="flex items-center gap-1 pb-2 pt-2  text-black  xl:pb-4 xl:pt-3 xl:text-xs">
                  <div className="svg_icon w-[20px] text-[#FFCE31]">
                    <StarIcon />
                  </div>
                  <h4 className="mr-1 text-[10px] font-semibold text-[#222]">
                    107 Reviews
                  </h4>
                  <div className="svg_icon w-3">
                    <Verify />
                  </div>
                  <h4 className="text-[10px] text-[#5F5D5D]">
                    Identity verified
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-3 xl:flex-nowrap">
                  <button
                    type="button"
                    className="purple_gradient_bg order-2 h-[40px] w-[164px] rounded-lg text-sm font-bold text-[#fff] sm:order-1"
                  >
                    Contact Host
                  </button>
                  <div className="order-1 flex items-center gap-2 sm:order-2">
                    <div className="svg_icon w-[18px] text-[#FFCE31]">
                      <Sheild />
                    </div>
                    <p className="w-[170px] text-[8px] font-medium text-[#808080]">
                      To protect your payment, never tranfer money or
                      communicate outside of the website or app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AvailableDate;
