import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInLeft } from '../../utilities/animations';

import 'swiper/css';
import 'swiper/css/navigation';
import BookCardOffer from './BookCardOffer';
import FavouriteBookCardOffer from './FavouriteBookCardOffer';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */

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

      <div className={`${sliderId} relative px-0`}>
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          modules={[Navigation]}
          navigation={{
            prevEl: `.${sliderId} .swiper-button-prev`,
            nextEl: `.${sliderId} .swiper-button-next`,
          }}
          breakpoints={{
            // when window width is >= 768px

            1200: {
              spaceBetween: 20,
              slidesPerView: 5,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 4.8,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3.5,
            },
            548: {
              spaceBetween: 30,
              slidesPerView: 2.5,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          className="flex"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={item.id}>
                {item.type === 'local' ? <BookCardOffer {...item} /> : null}
                {item.type === 'favourite' ? (
                  <FavouriteBookCardOffer {...item} />
                ) : null}
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-prev !-left-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
        <div className="swiper-button-next !-right-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
      </div>
    </motion.div>
  </div>
);
export default BookOffers;
