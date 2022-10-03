import { motion } from 'framer-motion';
import Image from 'next/image';
import FillLocate from '../../../public/icons/fillLocation.svg';
import {
  fadeInUp,
  fadeInLeft,
  animationWrapper,
} from '../../utilities/animations';
import TickMarkIcon from '../../../public/icons/check-lg.svg';
import UnderLine from '../common/UnderLine';

const imgData = [
  'group-1.png',
  'group-2.png',
  'group-3.png',
  'group-4.png',
  'group-5.png',
];

const Plan = () => (
  <motion.div
    className="container pt-8"
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div className="h-auto ">
      <h1 className="mb-4 text-[22px] font-bold text-[#222]">
        This is the plan
      </h1>

      <p className="mb-8 text-base text-[#808080] md:text-[18px]">
        Check out the plan below to see what you will get up with your local
        host. Feel free to personalize this offer with the host of your choice.
      </p>

      <div className="relative h-5 w-12">
        <div className="svg_icon absolute top-0 -left-3 z-10 w-6 text-[#E71575] ">
          <FillLocate />
        </div>
      </div>
      <div className="relative z-0 mb-0 h-full pt-10 lg:pt-[70px]">
        <div className="absolute -left-[1px] -top-2 -z-10 h-full w-[1px] border-[1px] border-dashed border-r-[#E71575] ">
          {/* <Image
            src="/line4.png"
            height="789px"
            width="2px"
            className="min-h-full"
          /> */}
        </div>
        {imgData.map((item) => (
          <motion.div
            variants={fadeInUp}
            className="relative ml-6 flex  flex-wrap gap-14 pt-3 pb-8"
            key={item}
          >
            <div className=" max-w-[373px]">
              <span className=" absolute -left-8 -top-5 z-10 text-[56px] text-[#E71575]">
                •
              </span>

              <h1 className="pb-2 text-[18px] font-bold text-[#000]">
                This is the plan
              </h1>
              <p className="text-[14px] text-[#000]">
                Tortor pellentesque nec sit nulla volutpat curabitur mattis
                fusce condimentum. Nulla orci congue praesent nullam vitae nibh.
                Sed sit sed eu lectus mi amet egestas massa.
              </p>
            </div>

            <Image
              src={`/${item}`}
              width={289}
              height={99}
              className="rounded"
            />
          </motion.div>
        ))}

        <div className="relative ml-6">
          <span className=" absolute -left-8 -top-8 z-10 text-[56px] text-[#E71575]">
            •
          </span>
          <h1 className="text-[18px] font-bold text-[#222]">
            Excited?
            <span className="text-[#E71575]"> Book Now</span>
          </h1>
        </div>
      </div>
      <UnderLine />
      <div>
        <motion.div className="w-full" variants={fadeInLeft}>
          <h1 className="mb-4 text-[22px] font-bold text-[#222] ">
            I can personlize this tour for you
          </h1>
          <motion.div
            variants={fadeInLeft}
            className="flex w-full flex-wrap items-start gap-4 rounded lg:min-h-[230px]  lg:flex-nowrap"
          >
            <div className="banner w-full p-0 lg:w-[40%] ">
              <Image
                src="/girl.png"
                width="362px"
                height="270px"
                alt="staybanner"
              />
            </div>
            <div className="relative w-full lg:w-[60%]">
              {[1, 2, 3].map((item) => (
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-3 pb-[10px] "
                  key={item}
                >
                  <div className="svg_icon w-6 text-[#E71575] md:w-8">
                    <TickMarkIcon />
                  </div>
                  <p className="text-sm text-[#808080]">
                    Vehicula faucibus ultrices gravida tincidunt dolor. Ut
                    ultricies nunc congue id eget malesuada.
                  </p>
                </motion.div>
              ))}
              <button
                type="button"
                className="purple_gradient_bg ml-2  mt-3 flex h-14 w-[182px] items-center justify-center rounded-lg text-base font-bold text-[#fff] "
              >
                Contact me
              </button>
            </div>
          </motion.div>
          <UnderLine />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default Plan;
