/* eslint-disable react/require-default-props */
import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  animationWrapper,
  fadeInRight,
  fadeInLeft,
} from '../../utilities/animations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MentorCard from '../common/cards/Mentor';
import LiveClass from '../common/cards/LiveClass';
import Workshop from '../common/cards/Workshop';
import PrimePacks from '../common/cards/PrimePacks';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */

interface ServicesSliderProps {
  data?: { id: number; type: string; imgUrl: string }[];
}

const SimilarProperties = ({ data }: ServicesSliderProps) => (
  <div className="relative pb-11">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="flex flex-wrap items-center pb-6">
        <motion.div variants={fadeInLeft} className="w-1/2">
          <h2 className="mr-7  text-2xl font-bold text-[#202124] lg:text-4xl">
            Similer
            <span className="purple_gradient_text"> Properites</span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          className="flex w-1/2 justify-end gap-5 md:pt-0"
        >
          <div className="relative flex w-[140px] items-center gap-2">
            <div className="good_to_know_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

            <div className="good_to_know_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            <div className="good_to_know_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
          </div>
        </motion.div>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.good_to_know_slider.swiper-button-prev',
            nextEl: '.good_to_know_slider.swiper-button-next',
          }}
          pagination={{
            type: 'fraction',
            el: '.good_to_know_slider.swiper-pagination',
          }}
          breakpoints={{
            // when window width is >= 768px
            1200: {
              spaceBetween: 20,
              slidesPerView: 5,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
          }}
          className="flex"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-full md:!w-[48.5%] lg:!w-[27%]"
              >
                {item.type === 'mentor' ? <MentorCard {...item} /> : null}
                {item.type === 'live-class' ? <LiveClass {...item} /> : null}
                {item.type === 'workshop' ? <Workshop {...item} /> : null}
                {item.type === 'prime-pack' ? <PrimePacks {...item} /> : null}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </motion.div>
  </div>
);
export default SimilarProperties;
