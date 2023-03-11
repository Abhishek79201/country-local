// /* eslint react/jsx-one-expression-per-line: "off" */
// /* eslint react/require-default-props: "off" */
// import { Navigation, FreeMode } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const DestinationTheme = () => (
//   <div className="relative ">
//     <div className="container my-6">
//       <h3 className=" text-lg font-bold text-black md:text-[20px]">
//         Choose Destination By
//         <span className="purple_gradient_text_deep "> Theme</span>
//       </h3>
//       <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
//         <Swiper
//           slidesPerView="auto"
//           spaceBetween={0}
//           freeMode
//           modules={[Navigation, FreeMode]}
//           navigation={{
//             prevEl: '.available_dates.swiper-button-prev',
//             nextEl: '.available_dates.swiper-button-next',
//           }}
//           className="flex flex-wrap !pr-5 md:!pr-0"
//         >
//           {[
//             ['Honeymoon', '16+ destinations'],
//             ['Family', '16+ destinations'],
//             ['Friends/Group', '16+ destinations'],
//             ['Solo', '16+ destinations'],
//             ['Adventure', '16+ destinations'],
//             ['Nature', '16+ destinations'],
//             ['Village', '16+ destinations'],
//           ].map(([title, subtitle]) => (
//             <SwiperSlide className="!w-[202px] sm:!w-[33.33%] lg:!w-[20%]">
//               <div className="m-3 flex flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px]">
//                 <div className=" rounded-[20px] ">
//                   <img src="/boat-girl.png" alt="review 1" />
//                 </div>
//                 <div className=" flex flex-col items-start  justify-center p-5 pr-2 md:pr-5">
//                   <h3 className="py-0 text-base font-semibold text-[#222]">
//                     {title}
//                   </h3>
//                   <h4 className="mb-4 text-[12px] font-medium">{subtitle}</h4>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="available_dates swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
//         <div className="available_dates swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
//       </div>
//     </div>
//   </div>
// );
// export default DestinationTheme;
const Consumised = () => (
  <div className="bg-[#F8F8F8] p-[20px] font-bold lg:p-[60px]">
    <div className="flex justify-between">
      <div className=" text-[24px] lg:text-[38px]">
        Looking For
        <span className=" purple_gradient_text_deep">Costumised Packages?</span>
      </div>
      <div>
        <button
          type="button"
          className="hidden rounded-[10px] bg-[#E71575] py-[16px] px-[32px] text-[20px] font-semibold  text-[#E71575]  lg:block"
        >
          + Post a Request
        </button>
      </div>
    </div>
    <div className="mt-6 md:mt-12">
      <div className="mb-6 grid gap-y-4 gap-x-4 md:mb-12  md:gap-y-9 md:gap-x-9 lg:grid-cols-2 xl:grid-cols-2 ">
        {[
          [
            'Personalise Your Package',
            'Select your preferred package or let us know of your requirements through chat options',
          ],
          [
            'Get Multiple Quotes',
            'Get multiple free quotes from verified travel experts',
          ],
          [
            'Request Changes, if any',
            'Chat or Speak to the experts to understand itenerary. Request for further customisations',
          ],
          ['Book the Best Deal', 'Book your hassle free holiday.'],
        ].map(([title, subtitle]) => (
          <div className="relative h-[115px] rounded-2xl bg-[white] md:h-[231px]">
            <div className="absolute left-2.5 top-[28px] -mt-4  grid h-[93px] w-[78px] place-items-center rounded-2xl bg-[#F8F8F8] md:top-[38px] md:left-6 md:h-[187px] md:w-[158px]" />
            <div className="absolute left-[93px] p-4 md:left-[200px]  ">
              <div
                className=" blue-gray text-blue-gray-600 pb-[8px] text-[14px] font-extrabold  md:pb-[16px] md:text-[28px]"
                color="blue-gray"
              >
                {title}
              </div>
              <div className="text-[10px] font-medium md:text-[18px]">
                {subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center">
      <button
        type="button"
        className=" rounded-[10px] bg-[#E71575] py-[16px] px-[26px] text-center text-[16px] font-semibold  text-[#FFF]  lg:hidden"
      >
        + Post a Request
      </button>
    </div>
  </div>
);
export default Consumised;
