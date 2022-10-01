import { motion } from 'framer-motion';
import Image from 'next/image';
import { animationWrapper, fadeInUp } from '../../utilities/animations';
import Arrow from '../../../public/icons/purple-arrow.svg';
import StarIcon from '../../../public/icons/star.svg';
import Verify from '../../../public/icons/black-verify.svg';
import Sheild from '../../../public/icons/sheild.svg';

const AvailableDate = () => (
  <motion.div
    className="container mb-20 py-4"
    variants={animationWrapper}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <h1 className="pb-0 text-2xl font-bold md:text-3xl lg:text-[38px]">
      Choose from
      <span className="purple_gradient_text"> available dates</span>
    </h1>
    <h5 className="pb-4 text-base font-medium">4 availables</h5>
    <div className="flex flex-wrap items-center justify-center gap-6 pb-10">
      {[1, 2, 3].map((item) => (
        <motion.div
          className="flex h-[173px] w-[400px] items-center gap-5 rounded-[10px] shadow-spread"
          variants={fadeInUp}
          key={item}
        >
          <div className="flex w-full justify-between  overflow-hidden rounded-[10px]  sm:flex-nowrap">
            <div className="w-[70%] p-5 ">
              <h3 className="py-0 text-base font-semibold text-[#222]">
                Tue, 2 Jul
              </h3>
              <h4 className="mb-4 text-[12px] font-medium">
                7:30 am - 8:00 am(IST)
              </h4>
              <a
                href="#"
                className="mb-3 text-[12px] text-[#222] underline hover:text-[#E71575]"
              >
                Book for a private group?
              </a>
              <div className="mt-4 flex items-center  gap-4">
                <button
                  type="button"
                  className="purple_gradient_bg flex h-[40px] w-[115px] items-center justify-center rounded text-[14px] font-bold text-[#fff]"
                >
                  Select
                </button>

                <p className="text-base text-[#808080]">
                  <span className="text-[#E71575]">$45</span>
                  /person
                </p>
              </div>
            </div>
            <div className="flex h-[173px] w-[30%] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#1C1C25] sm:h-auto lg:w-[150px]">
              <Image
                src="/icons/yellow-love.png"
                width={70}
                height={70}
                alt="review 1"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div className="w-100 mt-16 flex flex-wrap items-center justify-center gap-5">
      {[1, 2].map((item) => (
        <div className="mx-4 my-2 w-full sm:w-[590px]  md:m-0 " key={item}>
          <div className="flex flex-wrap overflow-hidden rounded-[10px] shadow-spread sm:flex-nowrap">
            <div
              className="flex h-[160px] w-full shrink-0 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat sm:h-auto sm:max-w-[155px]"
              style={{ backgroundImage: `url(/review-headshot-${item}.jpg)` }}
            >
              {/* <Image
               src={`/review-headshot-${item}.jpg`}
                width={202 * 2}
                height={183 * 2}
                alt="review 1"
                className="w-full rounded-[10px] sm:w-auto"
              /> */}
            </div>
            <div className="w-full p-5">
              <div className="flex flex-wrap items-center justify-between">
                <h1 className="text-[18px] font-semibold text-[#000]">
                  Hosted by The Isla Experience
                </h1>

                <a
                  href="#"
                  className="flex items-center text-[12px] font-semibold text-[#E71575]"
                >
                  See Profile
                  <div className="svg_icon w-3">
                    <Arrow />
                  </div>
                </a>
              </div>
              <div className="text-[10px] text-[#808080] xl:text-xs">
                Joined in February 2017
              </div>
              <div className="flex items-center gap-1 pb-2 pt-2  text-black  xl:pb-4 xl:pt-3 xl:text-xs">
                <div className="svg_icon w-[20px] text-[#FFCE31]">
                  <StarIcon />
                </div>
                <h4 className="mr-1 text-[10px] font-semibold text-[#222]">
                  107 Reviews
                </h4>
                <div className="svg_icon w-3">
                  <Verify />
                </div>
                <h4 className="text-[10px] text-[#5F5D5D]">
                  Identity verified
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  className="purple_gradient_bg order-2 h-[40px] w-[164px] rounded-lg text-sm font-bold text-[#fff] sm:order-1"
                >
                  Contact Host
                </button>
                <div className="order-1 flex items-center gap-2 sm:order-2">
                  <div className="svg_icon w-[18px] text-[#FFCE31]">
                    <Sheild />
                  </div>
                  <p className="w-[170px] text-[8px] font-medium text-[#808080]">
                    To protect your payment, never tranfer money or communicate
                    outside of the website or app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default AvailableDate;
