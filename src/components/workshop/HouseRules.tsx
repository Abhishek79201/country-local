import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  animationWrapper,
  fadeIn,
  fadeInLeft,
} from '../../utilities/animations';

const HouseRules = () => (
  <motion.div
    className="py-8"
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
      className="card h-auto w-full p-4 shadow-spread lg:h-[249px] lg:max-w-[749]"
    >
      <div className="flex items-center gap-x-4">
        <div className="flex items-center">
          <Image src="/icons/timer.png" width={24} height={24} alt="timer" />
          <p className="text-[14px] font-bold text-[#808080]">
            Check In after:
            <span className="font-semibold text-[#222]"> 4:00 PM</span>
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/icons/timer.png" width={24} height={24} alt="timer" />

          <p className="text-[14px] font-bold text-[#808080]">
            Check out befor:
            <span className="font-semibold text-[#222]"> 10:00 AM</span>
          </p>
        </div>
      </div>

      <div className="my-4 flex w-full flex-wrap gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <motion.p
            variants={fadeIn}
            className="text-[14px] font-semibold text-[#4B4B4B]"
            key={item}
          >
            <span className="mr-3 text-xl font-bold text-[#000]">•</span>
            Children allowed
          </motion.p>
        ))}
      </div>
      <button
        type="button"
        className="text-[#E71575 ho] h-[44px] w-[118px] rounded-lg border border-[#E71575] duration-100 ease-linear hover:bg-[#E71575] hover:text-[#fff]"
      >
        View More
      </button>
    </motion.div>
  </motion.div>
);

export default HouseRules;
