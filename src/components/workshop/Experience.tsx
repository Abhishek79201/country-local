import { motion } from 'framer-motion';
import React from 'react';
import { animationWrapper, fadeIn } from '../../utilities/animations';
import Checkmark from '../../../public/icons/checked-purple.svg';
import UnderLine from '../common/UnderLine';

const Experience = () => (
  <motion.div
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="mt-1 border-b-2 border-[#EBEBEB] pt-5 pb-7"
  >
    <h3 className="pb-6 text-lg font-semibold text-black md:text-[20px]">
      6 Reason to Book
      <span className="text-[#e45f8c]"> this Experience</span>
    </h3>
    <div className="flex w-full flex-wrap justify-between gap-y-5 md:max-w-[749px]">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <motion.div
          variants={fadeIn}
          key={item}
          className="flex items-center rounded-[5px] bg-white py-[6px] pl-2  pr-6 shadow-spread"
        >
          <div className="svg_icon w-6 text-[#e45f8c]">
            <Checkmark />
          </div>
          <div className="ml-2 text-sm font-semibold">
            Explore Berlin in a conviertible car
          </div>
        </motion.div>
      ))}
    </div>
    <UnderLine />
  </motion.div>
);

export default Experience;
