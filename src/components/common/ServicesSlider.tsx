/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */

import { motion } from 'framer-motion';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInLeft } from '../../utilities/animations';
import MentorCard from './cards/Mentor';

import 'swiper/css';
import 'swiper/css/navigation';
import LiveClass from './cards/LiveClass';
import Workshop from './cards/Workshop';
import PrimePacks from './cards/PrimePacks';

interface ServicesSliderProps {
  sliderId: string;
  title: JSX.Element;
  data?: { id: number; type: string; imgUrl: string }[];
  useLine?: boolean;
}

const ServicesSlider = ({
  sliderId,
  title,
  data,
  useLine,
}: ServicesSliderProps) => (
  <div className="relative pb-14">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="pb-3">
        <motion.div
          variants={fadeInLeft}
          className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap"
        >
          {title}
          {useLine ? (
            <div className="hidden h-[1px] flex-auto bg-[#D8D8D8] md:block" />
          ) : (
            <div className="hidden justify-between gap-3 border-b-[1px] lg:flex">
              <button
                type="button"
                className=" pb-2 text-[14px] font-semibold text-[#808080] duration-100 ease-linear hover:border-b-[3px] hover:border-[#E71575] hover:text-[#E71575] lg:text-base"
              >
                Workshop
              </button>
              <button
                type="button"
                className=" pb-2 text-[14px] font-semibold text-[#808080] duration-100 ease-linear hover:border-b-[3px] hover:border-[#E71575] hover:text-[#E71575] lg:text-base"
              >
                Mentors
              </button>
              <button
                type="button"
                className=" border-b-[3px] border-[#E71575] pb-2 text-base font-bold text-[#E71575] duration-100 ease-linear hover:text-[#E71575]"
              >
                Workshop
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <div className={`${sliderId} relative -ml-2 -mr-4 md:-ml-3 md:mr-0`}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: `.${sliderId} .swiper-button-prev`,
            nextEl: `.${sliderId} .swiper-button-next`,
          }}
          className="flex !pr-5 md:!pr-0"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[93%] md:!w-[42%] lg:!w-[27%]"
              >
                {item.type === 'mentor' ? <MentorCard {...item} /> : null}
                {item.type === 'live-class' ? <LiveClass {...item} /> : null}
                {item.type === 'workshop' ? <Workshop {...item} /> : null}
                {item.type === 'prime-pack' ? <PrimePacks {...item} /> : null}
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-prev !-left-1.5 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="swiper-button-next !-right-4 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </motion.div>
  </div>
);
export default ServicesSlider;
