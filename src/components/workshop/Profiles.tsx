import { motion } from 'framer-motion';
// import Image from 'next/image';
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
// import Panel from '../../../public/icons/panel.png';
import StayBanner from './StayBanner';
import HouseRules from './HouseRules';
import BookingCard from './BookingCard';

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
            <h1 className="pb-7 text-[36px] font-bold  leading-[43px] text-[#222]">
              Aberdeen Fishermen Cultural Tour with
              <br /> Delicious Dim Sums Lunch{' '}
              <span className="font-thin">(2D1N)</span>
            </h1>
            <div className="flex max-w-[749px] flex-wrap justify-between lg:flex-nowrap">
              <div className="flex w-1/2 items-center">
                <div className="svg_icon mr-2 w-[26px] shrink-0 text-[#E71575]">
                  <LocationIcon />
                </div>

                <div className="text-sm text-[#4A4A4A] lg:text-[20px]">
                  Mussoorie,Uttarkhand. India
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-end">
                <div className="svg_icon mr-2 w-[24px] shrink-0 text-[#FFCE31] ">
                  <StarIcon />
                </div>
                <div className="text-[18px]">
                  <span className="text-[18px] font-medium text-[#222]">
                    4.6
                  </span>{' '}
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
          <BookingCard />
        </motion.div>
      </div>
    </motion.div>
  </div>
);
export default Profiles;
