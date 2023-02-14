import Image from 'next/image';
import { motion } from 'framer-motion';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CalendarIcon from '../../../public/icons/calendar-outline.svg';
import ClockIcon from '../../../public/icons/clock-circle-filled.svg';
import HeartIcon from '../../../public/icons/heart.svg';
import StarIcon from '../../../public/icons/star.svg';
import CheckmarkIcon from '../../../public/icons/check-lg.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PersonSlider = () => (
  <div className="relative pt-14">
    <div className="container">
      <div className="flex items-center justify-between gap-4 pb-2">
        <div className="w-full md:w-1/2">
          <h2 className="mr-7 text-2xl font-bold text-[#202124] lg:text-4xl">
            Similar
            <span className="purple_gradient_text_deep"> Services</span>
          </h2>
        </div>
        <div className="hidden w-1/2 justify-end gap-5 md:flex md:pt-0">
          <div className="relative flex w-[130px] items-center gap-2">
            <div className="similar_services_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

            <div className="similar_services_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            <div className="similar_services_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
          </div>
        </div>
      </div>

      <div className="similar_services_slider relative -ml-3 -mr-4 px-0 md:-mr-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          modules={[Navigation, Pagination, FreeMode]}
          freeMode
          navigation={{
            prevEl: '.similar_services_slider.swiper-button-prev',
            nextEl: '.similar_services_slider.swiper-button-next',
          }}
          pagination={{
            type: 'fraction',
            el: '.similar_services_slider.swiper-pagination',
          }}
          className="flex"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <SwiperSlide
              key={item}
              className="!w-[320px] md:!w-[33.33%] lg:!w-[29%]"
            >
              <div className="mx-3 my-5">
                <div className="dark_shadow block rounded-2xl bg-white transition-shadow hover:shadow-lg">
                  <div className="relative rounded">
                    <div className="flex justify-center overflow-hidden rounded-lg">
                      <Image
                        src="/more-services-thumb.jpg"
                        width={590}
                        height={366}
                        alt="Mentor Name"
                      />
                    </div>

                    <div className="absolute top-3 left-3 flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-bold text-black">
                      4-Week Class
                    </div>

                    <button
                      type="button"
                      className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20 text-transparent"
                    >
                      <div className="svg_icon w-5">
                        <HeartIcon />
                      </div>
                    </button>
                  </div>

                  <div className="px-4 pt-4 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#E91E63]">
                        <div className="svg_icon mr-1 w-4">
                          <ClockIcon />
                        </div>
                        <span className="text-xs font-bold">
                          2 days left to join
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="svg_icon mr-1 w-4 text-[#FFCE31]">
                          <StarIcon />
                        </div>
                        <span className="mr-1 text-sm font-bold text-[#FFCE31]">
                          4.9
                        </span>
                        <div className="text-xs opacity-50">(42)</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center">
                      <div className="z-10 flex">
                        <div className="z-[5] flex h-[44px] w-[44px] overflow-hidden rounded-full border-2 border-white">
                          <Image
                            src="/author-head.png"
                            width={44}
                            height={44}
                          />
                        </div>
                        <motion.span
                          variants={{
                            initial: { opacity: 0, x: -20 },
                            animate: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.5,
                                delay: 1,
                              },
                            },
                          }}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                          className="z-[4] -ml-2 flex h-[44px] w-[44px] overflow-hidden rounded-full border-2 border-white"
                        >
                          <Image
                            src="/user-2.png"
                            width={44}
                            height={44}
                            alt="user-2"
                          />
                        </motion.span>
                      </div>
                      <div className="ml-3 text-base font-bold leading-tight">
                        <p>Richard Seil</p>
                        <motion.p
                          variants={{
                            initial: { opacity: 0, y: -20 },
                            animate: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 1,
                              },
                            },
                          }}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                        >
                          Clarisa Bru
                        </motion.p>
                      </div>
                      <div className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#FED501]">
                        <div className="svg_icon w-4">
                          <CheckmarkIcon />
                        </div>
                      </div>
                    </div>

                    <p className="py-3 text-lg font-bold leading-normal">
                      Designing Desserts with Richard Seil
                    </p>

                    <div className="flex">
                      <button
                        type="button"
                        className="mr-2 rounded-full bg-[#EBEDFC] px-4 py-2 text-xs font-bold text-[#202124] transition duration-300 hover:bg-black hover:text-white"
                      >
                        Backing
                      </button>
                      <button
                        type="button"
                        className="mr-2 flex items-center rounded-full bg-[#e6e6e6] px-4 py-2 text-xs font-bold text-[#767676] transition duration-300 hover:bg-black hover:text-white"
                      >
                        <div className="svg_icon -mt-[2px] mr-1 w-4">
                          <CalendarIcon />
                        </div>
                        Start Oct 31
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-t-slate-200 px-4 pt-2 pb-3">
                    <div className="text-sm text-[#C7C7C7]">
                      From
                      <div>
                        <span className="text-2xl font-bold text-black">
                          $50
                        </span>
                        <span> / class</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="rounded-lg border-2 border-black bg-black px-4 py-2 text-xs text-white transition duration-300 hover:bg-transparent hover:text-black"
                    >
                      Learn More
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
