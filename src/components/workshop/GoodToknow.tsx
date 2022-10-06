/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */

import { motion } from 'framer-motion';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {
  animationWrapper,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
} from '../../utilities/animations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CancelMark from '../../../public/icons/purple-cancel.svg';
import Checkmark from '../../../public/icons/checked-purple.svg';
import UnderLine from '../common/UnderLine';

const GoodToKnow = () => {
  const sliderItems = [
    {
      id: 1,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 2,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 3,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 4,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 5,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 6,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 7,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 8,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 9,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 10,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 11,
      title: 'Transport',
      imgUrl: 'purple-bus.png',
    },
    {
      id: 12,
      title: 'Private Group',
      imgUrl: 'purple-bus.png',
    },
  ];

  return (
    <div className="relative pb-5">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="pb-5 text-2xl font-bold text-black md:text-[28px] lg:text-[32px]"
        >
          Good to know
        </motion.h2>
        <div className="flex flex-wrap items-center pb-6">
          <motion.div variants={fadeInLeft} className="w-1/2">
            <h2 className="flex items-center text-base font-bold text-black md:text-[20px]">
              Whats Included
            </h2>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            className="hidden w-1/2 justify-end gap-5 md:flex md:pt-0"
          >
            <div className="relative flex w-[140px] items-center gap-2">
              <div className="good_to_know_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

              <div className="good_to_know_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
              <div className="good_to_know_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            </div>
          </motion.div>
        </div>
        <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            freeMode
            modules={[Navigation, Pagination, FreeMode]}
            navigation={{
              prevEl: '.good_to_know_slider.swiper-button-prev',
              nextEl: '.good_to_know_slider.swiper-button-next',
            }}
            pagination={{
              type: 'fraction',
              el: '.good_to_know_slider.swiper-pagination',
            }}
            className="flex flex-wrap !pr-5 md:!pr-0"
          >
            {sliderItems.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[68%] md:!w-1/3 lg:!w-1/5"
              >
                <div className="m-3 my-5 rounded-xl bg-white p-[15px] shadow-lg">
                  <div className="relative flex">
                    <Image
                      src={`/icons/${item.imgUrl}`}
                      width={33}
                      height={33}
                    />
                  </div>
                  <p className="pb-4 pt-4 text-base font-semibold text-black md:text-[20px]">
                    {item.title}
                  </p>
                  <p className="text-[13px]">
                    Tortor pellentesque nec sit nulla volutpat curabitur mattis
                    fusce condimentum. Nulla orci congue praesent nullam vitae
                    nibh. Sed sit sed eu lectus mi amet egestas{' '}
                    <a href="#" className="font-semibold text-[#E71575]">
                      Read More
                    </a>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <UnderLine />
      </motion.div>

      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-0  border-t-0 border-[#EBEBEB]"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <h3 className="pb-3 font-bold text-[#222] lg:text-2xl">
              Whats not Included
            </h3>
            <p className="mb-3 flex text-sm text-[#484848] md:text-base">
              <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum.. Nulla Orci congue prasent
            </p>
            <p className="mb-3 flex text-sm text-[#484848] md:text-base">
              <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="mb-6">
            <h3 className="pb-3 font-bold text-[#222] lg:text-[22px]">
              Where we will meet?
            </h3>
            <p className="mb-3 flex text-sm text-[#484848] md:text-base">
              <span className="svg_icon mr-2 inline-block w-[22px] flex-shrink-0 text-[#E61D51] xl:pt-1">
                <Checkmark />
              </span>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum.. Nulla Orci congue prasent
            </p>
            <button
              type="button"
              className="purple_gradient_bg ml-6 mt-2 rounded-[10px] py-3 px-5 text-sm font-bold text-[#fff] "
            >
              View Meeting Location
            </button>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="pb-3 font-bold text-[#222] lg:text-[22px]">
              Cancelation
            </h3>
            <p className="mb-3 flex text-sm text-[#484848] md:text-base">
              <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum.. Nulla Orci congue prasent
            </p>
            <p className="mb-3 flex text-sm text-[#484848] md:text-base">
              <span className="mr-2 inline-flex w-[22px] flex-shrink-0 items-center">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat
            </p>
          </motion.div>
        </motion.div>{' '}
        <UnderLine />
      </div>
    </div>
  );
};
export default GoodToKnow;