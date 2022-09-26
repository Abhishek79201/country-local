import { motion } from 'framer-motion';
import Image from 'next/image';
import { animationWrapper, fadeInUp } from '../../utilities/animations';
import LocationIcon from '../../../public/icons/location.svg';
import StarIcon from '../../../public/icons/star.svg';
import HighlightsCarousel from './HighlightsCarousel';
import ProfileDetails from './ProfileDetails';
import Activities from './Activities';
import SafetyFeatures from './SafetyFeatures';
import Offers from './Offers';
import AboutProperty from './AboutProperty';
import Experience from './Experience';
import Panel from '../../../public/icons/panel.png';
import StayBanner from './StayBanner';
import HouseRules from './HouseRules';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const Profiles = () => (
  <div className="relative bg-[#fff]  md:pt-14 lg:pt-12">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="flex flex-wrap justify-between gap-14 lg:flex-nowrap">
        <div className="w-full md:max-w-[749px]">
          <div className="w-full">
            <h1 className="text-[#222 text-2xl font-semibold">
              Aberdeen Fishermen Cultural Tou <br /> r with Delicious Dim Sums
              Lunch <span className="font-thin">(2D1N)</span>
            </h1>
            <div className="flex max-w-[749px] flex-wrap justify-between lg:flex-nowrap">
              <div className="flex w-1/2 items-center">
                <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                  <LocationIcon />
                </div>

                <div className="text-sm font-thin text-[#4A4A4A] lg:text-[20px]">
                  Mussoorie,Uttarkhand. India
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-end">
                <div className="svg_icon mr-2 w-[24px] shrink-0 text-[#FFCE31] ">
                  <StarIcon />
                </div>
                <div className="text-[18px]">
                  <span className="text-[18px] font-semibold">4.6</span>{' '}
                  <span className="text-[#808080]">(25)reviews</span>
                </div>
              </div>
            </div>
          </div>

          <HighlightsCarousel />
          <ProfileDetails />
          <Activities />
          <SafetyFeatures />
          <Offers />
          <AboutProperty />
          <Experience />
          <StayBanner />
          <HouseRules />
        </div>
        <motion.div
          className="panel flex flex-col items-center pb-16"
          variants={fadeInUp}
        >
          <div className="h-auto max-w-[424px] pb-1">
            <Image
              src={Panel}
              alt="panel"
              className="rounded-xl"
              width="424px"
              height="982px"
            />
          </div>

          <div className="relative z-0 mb-3 max-w-[424px]">
            <button
              type="button"
              className=" z-50 w-[400px]  rounded-xl border-4 border-[#fff] bg-[#002390] py-3 text-center text-[#fff] "
            >
              View All My Service
            </button>
            <button
              type="button"
              className=" absolute left-0 top-11 -z-10  w-[400px]  rounded-xl border-4 border-[#fff] bg-[#23B4ED] py-3 text-center text-[#fff] "
            >
              Total 10 Services
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);
export default Profiles;
