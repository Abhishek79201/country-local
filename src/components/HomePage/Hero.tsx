import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';

const Hero = () => (
  <div>
    <div className="relative">
      <Swiper
        spaceBetween={0}
        effect="fade"
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-position:  left min-h-[740px] w-[full] object-cover lg:h-screen lg:w-screen"
            src="/heroimg.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-position:  left min-h-[740px] w-[full] object-cover lg:h-screen lg:w-screen"
            src="/plan-fullsize-4.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-10 z-50 flex w-full flex-col p-8">
        <h1 className=" font-bold text-[#fff] sm:text-left  md:text-[36px]  md:leading-snug lg:text-center lg:text-[64px]">
          Support Local communities
        </h1>
        <p className=" font-normal text-[#fff] sm:text-left md:pb-6 md:text-[20px] md:leading-snug lg:text-center lg:text-[32px]">
          you get better experiences, they get a better life
        </p>
      </div>
    </div>
    <div className="min-h-[440px] rounded-b-[5rem] bg-gradient-to-r	 from-fuchsia-500 to-violet-500 p-8	">
      <h1 className="max-w-[670px] font-bold text-[#fff] sm:text-left md:pb-6 md:text-[20px] md:leading-snug lg:text-[38px]">
        With Country Locals experiences are always
      </h1>
      <div className=" flex flex-wrap items-center justify-center">
        <div className="m-3 flex  flex-col	flex-nowrap justify-center gap-2 overflow-hidden  rounded-[10px] border border-white bg-white/20	backdrop-blur-xl lg:flex-row	">
          <div className="flex ">
            <div className="flex min-w-[45%]  overflow-hidden  rounded-[10px] ">
              <img
                src="/review-popup-2.jpg"
                alt="review 1"
                className="min-w-[100%] object-cover sm:max-w-[128px]"
              />
            </div>
            <div className="flex max-w-[450px] flex-col justify-center gap-2 self-center p-5 pb-2 pr-2  md:min-h-[250px] md:pr-5 ">
              <h3 className="text-[14px] font-bold leading-tight text-[#fff]  md:text-[22px]">
                1 | Alaways private & personal
              </h3>
              <h4 className="text-[12px] font-thin leading-snug text-[#fff] md:text-[18px]">
                No strangers,just you. Fully costomize your trip to your needs
              </h4>
            </div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row">
            <div className="flex min-w-[45%]  overflow-hidden  rounded-[10px] ">
              <img
                src="/review-popup-2.jpg"
                alt="review 1"
                className="min-w-[100%] object-cover sm:max-w-[128px]"
              />
            </div>
            <div className="flex max-w-[450px] flex-col justify-center gap-2 self-center p-5 pb-2 pr-2  md:min-h-[250px] md:pr-5 ">
              <h3 className="text-[14px] font-bold leading-tight text-[#fff]  md:text-[22px]">
                1 | Alaways private & personal
              </h3>
              <h4 className="text-[12px] font-thin leading-snug text-[#fff] md:text-[18px]">
                No strangers,just you. Fully costomize your trip to your needs
              </h4>
            </div>
          </div>
          <div className="flex ">
            <div className="flex min-w-[45%]  overflow-hidden  rounded-[10px] ">
              <img
                src="/review-popup-2.jpg"
                alt="review 1"
                className="min-w-[100%] object-cover sm:max-w-[128px]"
              />
            </div>
            <div className="flex max-w-[450px] flex-col justify-center gap-2 self-center p-5 pb-2 pr-2  md:min-h-[250px] md:pr-5 ">
              <h3 className="text-[14px] font-bold leading-tight text-[#fff]   md:text-[22px]">
                1 | Alaways private & personal
              </h3>
              <h4 className="text-[12px] font-thin leading-snug text-[#fff] md:text-[18px]">
                No strangers,just you. Fully costomize your trip to your needs
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Hero;
