import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ShareIcon from '../../../public/icons/share-arrow.svg';
import HeartIcon from '../../../public/icons/purple-love.svg';
import FlagIcon from '../../../public/icons/purple-flag.svg';
import ReportPopup from '../common/popups/report-popups/ReportPopup';
import UnderLine from '../common/UnderLine';

const ProfileDetails = () => {
  const [openReport, setOpenReport] = useState(false);
  return (
    <div className="max-w-[749px]">
      <div className="header flex items-start justify-between pb-4">
        <div className="flex flex-wrap gap-4 sm:flex-nowrap">
          <div className="relative mb-3 flex shrink-0 sm:mb-0">
            <div className="absolute top-0 left-12 z-[2] h-4 w-4 rounded-full border border-white bg-[#1DBF73]" />
            <div className="relative z-[1] flex items-center overflow-hidden rounded-full">
              <Image
                src="/mentor-card-1.jpg"
                width={68}
                height={68}
                alt="Mentor 1"
              />
            </div>
            <motion.div
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
              className="-ml-10 flex items-center overflow-hidden rounded-full"
            >
              <Image
                src="/mentor-card-2.jpg"
                width={68}
                height={68}
                alt="Mentor 1"
              />
            </motion.div>
          </div>
          <div className="text">
            <div className="flex items-center pb-1">
              <h1 className="mr-3 text-[14px] font-semibold">
                Enjoy Local Experience
              </h1>
              <div className="flex items-center gap-1">
                {' '}
                <Image
                  src="/icons/verified.png"
                  alt="verified"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <h1 className="text-[14px] font-bold text-[#1875FF]">
                  {' '}
                  Identify Verified
                </h1>
              </div>
            </div>
            <h1 className="text-[18px] font-bold text-[#4A4A4A]">
              With
              <span className="ml-2 text-[#E71575] ">Martin & Alexa</span>
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E71575] bg-opacity-10"
          >
            <div className="svg_icon w-[14px] text-[#E71575]">
              <ShareIcon />
            </div>
          </button>
          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E71575] bg-opacity-10"
          >
            <div className="svg_icon w-[14px] text-transparent">
              <HeartIcon />
            </div>
          </button>

          <button
            type="button"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#E71575] bg-opacity-10"
            onClick={() => setOpenReport(true)}
          >
            <div className="svg_icon w-[14px] text-transparent">
              <FlagIcon />
            </div>
          </button>
          <ReportPopup
            status={openReport}
            onClose={() => {
              setOpenReport(false);
            }}
          />
        </div>
      </div>
      <div className="content">
        <h1 className="text-[14px] font-bold text-[#575757] ">
          The Traveling Painters
        </h1>
        <div className="flex items-center gap-2 pb-8">
          <Image src="/icons/global.png" alt="global" width={20} height={20} />
          <h1 className="text-[12px] font-bold text-[#4A4A4A]">
            <span className="font-thin"> I speak </span>
            Español, English, Português
          </h1>
        </div>

        <button
          className="purple_gradient_bg_light mb-8 rounded-lg py-4 px-8 text-base font-bold text-[#fff]"
          type="button"
        >
          Contact Host
        </button>
        <p className=" p-0 text-[18px]  text-[#808080] ">
          Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
          condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit sed
          eu lectus mi amet egestas massa. Nunc enim eleifend tellus tincidunt
          pharetra sagittis volutpat. Ut donec vitae ut viverra lacus lectus
          orci. Amet, consequat volutpat magna risus risus.
          <span className=" font-semibold text-[#E71575] "> Read More...</span>
        </p>
        <UnderLine />
      </div>
    </div>
  );
};

export default ProfileDetails;
