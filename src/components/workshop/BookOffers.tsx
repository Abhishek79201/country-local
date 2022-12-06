/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <div className="container">
      <div className="pb-5">
        <div className="flex items-center justify-between gap-4 pb-2">
          {title}
        </div>
      </div>

      <div className={`${sliderId} relative -ml-2 -mr-4 px-0 md:-mr-2`}>
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
        <div className="swiper-button-prev !-left-2 !top-[30%] !mt-0 !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="swiper-button-next !-right-2 !top-[30%] !mt-0 !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </div>
  </div>
);
export default BookOffers;
