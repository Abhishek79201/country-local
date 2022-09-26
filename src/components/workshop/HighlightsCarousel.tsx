/* eslint-disable prettier/prettier */
// import { motion } from 'framer-motion';
import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInUp } from '../../utilities/animations';
import { highlightData } from '../../utilities/dummy-api';
import UnderLine from '../common/UnderLine';

const HighlightsCarousel = () => (
  <motion.div
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="pt-11"
  >
    <h1 className="font-[22px] pb-5 font-semibold text-[#222]">Highlights</h1>
    <div className="relative mb-5 max-w-[749px]">
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          // when window width is >= 768px
          768: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
          540: { slidesPerView: 3 },
        }}
        className="pr-[110px]"
      >
        {highlightData?.map((item) => (
          <SwiperSlide className="slide" key={Math.random() * 10}>
            <motion.div variants={fadeInUp}>
              <div className="flex h-[139px] w-[136px] flex-col items-center gap-3 rounded-xl border p-8">
                {' '}
                <div className="svg_icon w-[36px] text-[#E71575]">
                  <item.icon />
                </div>
                <h1 className="text-sm font-semibold">{item.title}</h1>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev !-left-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
      <div className="swiper-button-next !-right-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
    </div>

    <UnderLine />
  </motion.div>
);
export default HighlightsCarousel;
