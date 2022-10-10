import { motion } from 'framer-motion';
import Image from 'next/image';
import TickMarkIcon from '../../../public/icons/check-lg.svg';
import { animationWrapper, fadeInLeft } from '../../utilities/animations';
import UnderLine from '../common/UnderLine';

const StayBanner = () => (
  <motion.div
    className="w-full "
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <h3 className="mb-4 text-[22px] font-bold text-[#000] ">
      You will Stay her
    </h3>
    <motion.div
      variants={fadeInLeft}
      className="flex h-auto w-full flex-wrap items-center rounded-xl shadow-xl md:flex-nowrap lg:h-[198px] "
    >
      <div className="banner overflow-hidden rounded-[10px] bg-black p-0 md:h-[198px] md:w-[244px] ">
        <Image
          src="/stay-banner.jpg"
          width={730}
          height={546}
          alt="staybanner"
        />
      </div>
      <div className="relative max-w-[505px]  p-4 pt-6 lg:pt-0 ">
        <p className="text-[18px] font-bold text-[#4A4A4A]">Where You Sleep</p>
        {[1, 2, 3].map((item) => (
          <motion.div
            variants={fadeInLeft}
            className="flex items-center gap-2 pt-1 "
            key={item}
          >
            <div className="svg_icon w-6 text-[#e45f8c]">
              <TickMarkIcon />
            </div>
            <p className="text-[12px] text-[#4A4A4A]">
              Vehicula faucibus ultices gravida tincidunt dolor. Ut ultricies
              nunc congue id heget malesuada
            </p>
          </motion.div>
        ))}
        <div className="purple_gradient_bg absolute right-3 -top-4 flex h-[28px] w-[149px] items-center justify-center rounded text-[14px] font-bold text-[#fff] md:-top-6 ">
          From $45 / Person
        </div>
      </div>
    </motion.div>
    <UnderLine />
  </motion.div>
);

export default StayBanner;
