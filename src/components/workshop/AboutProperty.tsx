import { motion } from 'framer-motion';
import Checkmark from '../../../public/icons/checked-purple.svg';
import {
  animationWrapper,
  fadeIn,
  fadeInLeft,
} from '../../utilities/animations';
import UnderLine from '../common/UnderLine';

const AboutProperty = () => (
  <motion.div
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div>
      <h1 className="mb-2 text-[22px] font-bold text-[#222] ">
        Description about the Property
      </h1>
      <div className="mb-5 flex gap-2">
        {[1, 2, 3].map((item) => (
          <motion.div
            variants={fadeInLeft}
            key={item}
            className="w-[100px] rounded-md bg-[#f8f8f8] py-1 text-center  "
          >
            <p className="text-[10px] text-[#808080]">History & Culture</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        variants={fadeIn}
        className="mb-5 text-[18px] leading-[26px] text-[#808080]"
      >
        Hloyo Village is located on Doi Mae Salong in Chiang Rai. The Akha, a
        hill tribe, lives here in a very simple way. Their Thai might not be
        very fluent, so sometimes you need to use your body language and of
        course your heart when you speak with them! Leave all the hustle and
        bustle behind and lets relax. Staying in a traditional clay house,
        sipping hot coffee, watching a sunrise doesnt it sound right enough to
        leave everything and just come here!?
      </motion.p>

      {[1, 2, 3, 4, 5].map((item) => (
        <motion.div
          variants={fadeIn}
          key={item}
          className="flex items-center rounded-[5px]  py-[8px]"
        >
          <div className="svg_icon w-10 text-[#E71575] md:w-6">
            <Checkmark />
          </div>
          <div className="ml-2 text-sm font-semibold">
            Experience to taste hill tribe food, prepare ingredients and learn
            how to cook Ahka food with hosts
          </div>
        </motion.div>
      ))}
    </div>
    <UnderLine />
  </motion.div>
);

export default AboutProperty;
