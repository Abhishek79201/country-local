import { motion } from 'framer-motion';
import Image from 'next/image';
import { animationWrapper, fadeIn } from '../../utilities/animations';
import { activitiesData } from '../../utilities/dummy-api';
import UnderLine from '../common/UnderLine';

const Activities = () => (
  <motion.div
    className="max-w-[749px]"
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <h1 className="pb-8 text-[22px] font-bold text-[#222] ">Activities</h1>
    <div className="flex w-full flex-wrap justify-start gap-5  md:gap-y-7 md:gap-x-[80px]">
      {activitiesData.map((item) => (
        <motion.div
          variants={fadeIn}
          className="ml-3 flex  items-center gap-2 "
          key={Math.random() * 10}
        >
          <div className="flex w-[36px] items-center text-[#E71575]">
            <Image src={item.icon} alt="icon" width="21px" height="21px" />
          </div>
          <h1 className="text-base font-semibold text-[#222] ">{item.title}</h1>
        </motion.div>
      ))}
    </div>
    <UnderLine />
  </motion.div>
);

export default Activities;
