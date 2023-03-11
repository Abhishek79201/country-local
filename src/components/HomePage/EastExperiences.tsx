/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EastExperiences = () => (
  <div className="relative pb-14">
    <div className="container my-6">
      <h3 className=" text-lg font-bold text-black md:text-[20px]">
        Get Inspired By
        <span className="purple_gradient_text_deep ">
          Best North East Experiences
        </span>
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
          {[
            ['Honeymoon', '16+ destinations'],
            ['Family', '16+ destinations'],
            ['Friends/Group', '16+ destinations'],
            ['Solo', '16+ destinations'],
            ['Adventure', '16+ destinations'],
            ['Nature', '16+ destinations'],
            ['Village', '16+ destinations'],
          ].map(([title, subtitle]) => (
            <SwiperSlide className="!w-[202px] sm:!w-[33.33%] lg:!w-[20%]">
              <div className="m-3 flex flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px]">
                <div className=" rounded-[20px] ">
                  <img src="/boat-girl.png" alt="review 1" />
                </div>
                <div className=" flex flex-col items-start  justify-center p-5 pr-2 md:pr-5">
                  <h3 className="py-0 text-base font-semibold text-[#222]">
                    {title}
                  </h3>
                  <h4 className="mb-4 text-[12px] font-medium">{subtitle}</h4>
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
export default EastExperiences;
