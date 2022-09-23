import { motion } from 'framer-motion';
import Image from 'next/image';
import { animationWrapper, fadeInUp } from '../../utilities/animations';
import StarIcon from '../../../public/icons/star.svg';

const ReviewSlider = () => (
  <motion.div
    className="container py-4"
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div className="flex flex-wrap items-center justify-center gap-5">
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          className="flex w-[300px] items-center gap-5 rounded-md p-2 shadow-spread"
          variants={fadeInUp}
          key={item}
        >
          <div className="h-[78px] w-[66px] rounded border">
            <Image src="/icons/tower.png" width={66} height={78} />
          </div>

          <div>
            <div className="flex items-center text-[#FFCE31]">
              <span className="svg_icon inline-block w-[8px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[8px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[8px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[8px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[8px]">
                <StarIcon />
              </span>
              <span className="ml-3 text-[11px] text-[#404145]">
                {' '}
                5 Reviews
              </span>
            </div>
            <h2 className="py-1 text-lg font-medium text-[#222]">
              Art and Culture
            </h2>
            <h4 className="text-[14px] font-medium text-[#808080]">
              49 experiences
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ReviewSlider;
