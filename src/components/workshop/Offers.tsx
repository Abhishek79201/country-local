import { motion } from 'framer-motion';
import { animationWrapper, fadeInUp } from '../../utilities/animations';
import { offersData } from '../../utilities/dummy-api';
import UnderLine from '../common/UnderLine';

const Offers = () => (
  <motion.div
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="mt-8 mb-8 max-w-[767px]"
  >
    <h1 className="pb-8 text-[22px] font-bold text-[#222] ">
      What this place offers
    </h1>
    <div className="mb-8 flex w-full flex-wrap justify-start gap-4 ">
      {offersData.map((item) => (
        <motion.div
          variants={fadeInUp}
          className="flex w-[239px] cursor-pointer items-center gap-x-1 rounded-md bg-[#F8F8F8] p-4 duration-150 ease-linear hover:bg-[#E71575] hover:text-[#fff]"
          key={Math.random() * 10}
        >
          <div className="svg_icon text-[#222]] w-[20px] ease-linear hover:bg-[#E71575] hover:text-[#fff]">
            <item.icon />
          </div>
          <h1 className="text-[14px]">{item.title}</h1>
        </motion.div>
      ))}
      <motion.div
        variants={fadeInUp}
        className="flex w-[230px] cursor-pointer items-center gap-x-2 rounded-md border border-[#E71575] bg-[#F8F8F8] p-4 text-[#E71575] duration-150 ease-linear hover:bg-[#E71575] hover:text-[#fff]"
      >
        <h1>Show all 14 amenities</h1>
      </motion.div>
    </div>
    <UnderLine />
  </motion.div>
);

export default Offers;
