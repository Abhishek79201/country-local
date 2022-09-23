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

const Plan = () => (
  <motion.div
    className="container py-8"
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div className="h-auto max-w-[749px]">
      <h1 className="mb-4 text-[22px] font-bold text-[#222]">
        This is the plan
      </h1>

      <p className="mb-5 text-[18px] text-[#808080]">
        Check out the plan below to see what you will get up with your local
        host. Feel free to personalize this offer with the host of your choice.
      </p>

      <div className="relative h-5 w-12">
        <div className="svg_icon absolute top-0 -left-9 w-6 text-[#E71575] ">
          <FillLocate />
        </div>
      </div>
      <div className="relative z-0 mb-8 h-full py-5">
        <div className="absolute -left-[24.5px] -z-10 h-full ">
          <Image
            src="/line4.png"
            height="789px"
            width="2px"
            className="min-h-full"
          />
        </div>
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.div
            variants={fadeInUp}
            className="relative flex max-w-[749px] flex-wrap gap-14 py-5"
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
              src="/group-2486.png"
              width={289}
              height={99}
              className="rounded"
            />
          </motion.div>
        ))}

        <div className="relative">
          <span className=" absolute -left-8 -top-8 z-10 text-[56px] text-[#E71575]">
            •
          </span>
          <h1 className="text-[18px] font-bold text-[#222]">
            Excited?
            <span className="text-[#E71575]"> Book Now</span>
          </h1>
        </div>
      </div>

      <div>
        <motion.div className="w-full py-8" variants={fadeInLeft}>
          <h1 className="mb-4 text-[22px] font-bold text-[#000] ">
            I can personlize this tour for you
          </h1>
          <motion.div
            variants={fadeInLeft}
            className="flex min-h-[230px] w-full flex-wrap items-start gap-4 rounded  lg:flex-nowrap"
          >
            <div className="banner min-h-[230px] w-[332px] p-0 ">
              <Image
                src="/girl.png"
                width="352px"
                height="270px"
                alt="staybanner"
              />
            </div>
            <div className="relative max-w-[505px] bg-[#f8f8f8]">
              {[1, 2, 3].map((item) => (
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 py-1 "
                  key={item}
                >
                  <div className="svg_icon w-6 text-[#e45f8c]">
                    <TickMarkIcon />
                  </div>
                  <p className="text-[12px] text-[#4A4A4A]">
                    Vehicula faucibus ultrices gravida tincidunt dolor. Ut
                    ultricies nunc congue id eget malesuada.
                  </p>
                </motion.div>
              ))}
              <button
                type="button"
                className="purple_gradient_bg ml-2  mt-3 flex h-14 w-[182px] items-center justify-center rounded-lg text-[16px] font-bold text-[#fff] "
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
