import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  animationWrapper,
  fadeIn,
  fadeInLeft,
} from '../../utilities/animations';
import Dot from '../../../public/icons/dot.svg';

const HouseRules = () => (
  <motion.div
    className="pb-12"
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <motion.h1
      variants={fadeIn}
      className="mb-4 text-[22px] font-bold text-[#000]"
    >
      House Rules
    </motion.h1>
    <motion.div
      variants={fadeInLeft}
      className="card h-auto w-full rounded-[10px] p-4 shadow-spread lg:h-[249px] lg:max-w-[749]"
    >
      <div className="flex items-center gap-x-4 border-b-2  pl-4 pb-3">
        <div className="flex items-center">
          <Image src="/icons/timer.png" width={24} height={24} alt="timer" />
          <p className=" text-[11px] font-bold text-[#808080] sm:text-[14px]">
            Check In after:
            <span className="font-semibold text-[#222]"> 4:00 PM</span>
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/icons/timer.png" width={24} height={24} alt="timer" />

          <p className="text-[11px] font-bold text-[#808080] sm:text-[14px]">
            Check out befor:
            <span className="font-semibold text-[#222]"> 10:00 AM</span>
          </p>
        </div>
      </div>

      <div className="my-3 flex w-full flex-wrap gap-0 pl-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            variants={fadeIn}
            className="flex w-1/2 items-center gap-3  py-2 text-[14px] font-semibold "
            key={item}
          >
            <div className="svg_icon w-[6px] text-[#000]">
              <Dot />
            </div>
            <span className="text-sm font-semibold text-[#4B4B4B]">
              Children allowed
            </span>
          </motion.div>
        ))}
      </div>
      <button
        type="button"
        className="h-[44px] w-[118px] rounded-lg border border-[#E71575] text-[#E71575] duration-100 ease-linear hover:bg-[#E71575] hover:text-[#fff]"
      >
        View More
      </button>
    </motion.div>
  </motion.div>
);

export default HouseRules;
