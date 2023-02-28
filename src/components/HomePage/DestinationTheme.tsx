/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PrData } from '../PrData/PrData';

const DestinationTheme = ({ sliderId, title, data }: DestinationProps) => (
  <div className="relative ">
    <div className="container my-6">
      <h3 className=" text-lg font-bold text-black md:text-[20px]">
        Choose Destination By
        <span className="purple_gradient_text_deep "> Theme</span>
      </h3>
      <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: '.available_dates.swiper-button-prev',
            nextEl: '.available_dates.swiper-button-next',
          }}
          className="flex flex-wrap !pr-5 md:!pr-0"
        >
          {PrData.map((item) => (
            <SwiperSlide
              key={item}
              className="!w-[202px] sm:!w-[33.33%] lg:!w-[20%]"
            >
              <div className="m-3 flex flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px]">
                <div className=" rounded-[20px] ">
                  <img src={item.src} alt="review 1" />
                </div>
                <div className=" flex flex-col items-start  justify-center p-5 pr-2 md:pr-5">
                  <h3 className="py-0 text-base font-semibold text-[#222]">
                    {item.title}
                  </h3>
                  <h4 className="mb-4 text-[12px] font-medium">
                    {item.subtitle}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="available_dates swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="available_dates swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </div>
  </div>
);
export default DestinationTheme;
