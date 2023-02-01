import { useState } from 'react';
import BannerVideoPopover from './popovers/BannerVideoPopover';

/* eslint @next/next/no-img-element: "off" */
const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="relative bg-[#1C1C25]">
        <div className="container">
          <div className="relative z-[2] flex flex-wrap-reverse lg:flex-nowrap">
            <div className="mt-8 mb-4 w-full lg:w-1/2">
              <div className="-ml-6 max-w-[200px] sm:-ml-8 sm:max-w-[250px]">
                <img src="/live-session.png" alt="Live Session" />
              </div>
              <h1 className="-mt-3 text-3xl font-bold text-white sm:-mt-9 sm:text-[58px]">
                GET THE BEST
              </h1>
              <div className="-ml-4 -mt-2 max-w-[270px] sm:-mt-8 sm:-ml-6 sm:max-w-[400px]">
                <img src="/celebrity-gold.png" alt="Live Session" />
              </div>
              <h1 className="-mt-2 text-3xl font-bold text-white sm:-mt-8 sm:text-[58px]">
                EXPERIENCE
              </h1>
              <div className="max-w-[450px] sm:-mt-2">
                <img src="/celebrity-name.png" alt="Live Session" />
              </div>
              <div className="max-w-[440px]">
                <img src="/celebrity-talent.png" alt="Live Session" />
              </div>
              <button
                type="button"
                className="purple_gradient_bg_light relative z-[1] flex h-[56px] w-full items-center rounded-[10px] px-5 sm:w-auto"
              >
                <span className="block w-full text-base font-semibold text-white">
                  GET STARTED
                </span>
                <span className="ml-2 block max-w-[25px]">
                  <img src="/icons/arrow-right.png" className="w-full" alt="" />
                </span>
              </button>
              <div className="-ml-[50%] -mt-[16%]">
                <img src="/zig-zag-line.png" alt="Live Session" />
              </div>
            </div>
            <div className="flex w-full items-center justify-end lg:w-1/2">
              <div className="relative lg:-mb-[20%] lg:max-w-[550px] xl:-mb-[15%]">
                <img src="/banner-video-group.png" alt="" />
                <button
                  type="button"
                  className="absolute left-[50%] top-[50%] max-w-[65px] translate-x-[-50%] translate-y-[-50%] transform"
                  onClick={() => setShowVideo(true)}
                >
                  <img src="/banner-play.png" alt="Play" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 -bottom-5 z-[1] hidden h-full max-w-[500px] sm:block">
          <img src="/banner-side.png" alt="banner" className="h-full w-auto" />
        </div>
      </div>
      <BannerVideoPopover
        status={showVideo}
        onClose={() => setShowVideo(false)}
      />
    </>
  );
};
export default Banner;
