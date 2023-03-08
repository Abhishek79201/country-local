/* eslint react/no-array-index-key: "off" */
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import StarIcon from '../../../public/icons/star.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PersonSlider = () => (
  <div className="relative pt-14">
    <div className="container">
      <div className="flex items-center justify-between gap-4 pb-2">
        <div className="w-full md:w-1/2">
          <h2 className="mr-7 text-2xl font-bold text-[#202124] lg:text-4xl">
            More
            <span className="purple_gradient_text_deep"> Celebrities</span>
          </h2>
        </div>
        <div className="hidden w-1/2 justify-end gap-5 md:flex md:pt-0">
          <div className="relative flex w-[130px] items-center gap-2">
            <div className="similar_properties_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

            <div className="similar_properties_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            <div className="similar_properties_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
          </div>
        </div>
      </div>

      <div className="similar_properties_slider relative -ml-3 -mr-4 px-0 md:-mr-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          modules={[Navigation, Pagination, FreeMode]}
          freeMode
          navigation={{
            prevEl: '.similar_properties_slider.swiper-button-prev',
            nextEl: '.similar_properties_slider.swiper-button-next',
          }}
          pagination={{
            type: 'fraction',
            el: '.similar_properties_slider.swiper-pagination',
          }}
          className="flex"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <SwiperSlide
              key={item}
              className="!w-[300px] md:!w-[33.33%] lg:!w-[25%]"
            >
              <div
                className="mx-3 my-5 rounded-xl bg-white bg-cover bg-center bg-no-repeat"
                style={{
                  boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)',
                  backgroundImage: 'url(/similar-services-bg.jpg)',
                }}
              >
                <div className="flex min-h-[340px] flex-col justify-between p-4 md:min-h-[390px]">
                  <div className="flex items-center justify-between">
                    <div className="max-w-[150px] text-white">
                      <div className="flex items-center">
                        <div className="mr-2 flex gap-x-1">
                          {[...Array(5)].map((star, index) => (
                            <div key={index} className="svg_icon w-3">
                              <StarIcon />
                            </div>
                          ))}
                        </div>
                        <div className="text-xs font-light">(284)</div>
                      </div>
                      <div className="mt-2 text-xs leading-normal">
                        <strong>I Speak:</strong>
                        <span className="ml-1">English, Francis Portugis</span>
                      </div>
                    </div>
                    <div className="flex h-[26px] items-center rounded-full bg-white bg-opacity-30 px-2">
                      <div className="mr-1 h-3 w-3 rounded-full bg-pink_primary" />
                      <span className="text-xs font-bold text-white">
                        Available
                      </span>
                    </div>
                  </div>

                  <div className="pb-4 text-center text-white">
                    <p>Hello I am</p>
                    <p className="my-1 text-2xl font-bold">Jade Warren</p>
                    <p>The Cool Actor</p>
                    <a
                      href="#"
                      className="mx-auto mt-4 block max-w-[160px] rounded-full border-2 border-white px-3 py-2 text-center text-sm transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
                    >
                      More About Me
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);
export default PersonSlider;