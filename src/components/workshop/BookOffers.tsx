/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { motion } from 'framer-motion';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInLeft } from '../../utilities/animations';

import 'swiper/css';
import 'swiper/css/navigation';

import BookCardOffer from './BookCardOffer';
import FavouriteBookCardOffer from './FavouriteBookCardOffer';

interface BookOffersProps {
  sliderId: string;
  title: JSX.Element;
  data?: { id: number; type: string; imgUrl: string }[];
}

const BookOffers = ({ sliderId, title, data }: BookOffersProps) => (
  <div className="relative pb-14">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="pb-5">
        <motion.div
          variants={fadeInLeft}
          className="flex items-center justify-between gap-4 pb-2"
        >
          {title}
        </motion.div>
      </div>

      <div className={`${sliderId} relative -ml-3 -mr-3 px-0`}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: `.${sliderId} .swiper-button-prev`,
            nextEl: `.${sliderId} .swiper-button-next`,
          }}
          className="flex"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[245px] sm:!w-[33.33%] lg:!w-[20%]"
              >
                {item.type === 'local' && <BookCardOffer {...item} />}
                {item.type === 'favourite' && (
                  <FavouriteBookCardOffer {...item} />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-prev !-left-5 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="swiper-button-next !-right-5 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </motion.div>
  </div>
);
export default BookOffers;
