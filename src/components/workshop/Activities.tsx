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
    <div className="flex w-full flex-wrap items-center justify-start  md:gap-y-10 ">
      {activitiesData.map((item) => (
        <motion.div
          variants={fadeIn}
          className="flex w-full flex-wrap items-center gap-1   md:w-[249px] md:flex-nowrap"
          key={Math.random() * 10}
        >
          <div className="flex w-[36px] items-center text-[#E71575]">
            <Image src={item.icon} alt="icon" width="30px" height="30px" />
          </div>
          <h1 className="text-[15px] font-semibold text-[#222] ">
            {item.title}
          </h1>
        </motion.div>
      ))}
    </div>
    <UnderLine />
  </motion.div>
);

export default Activities;
