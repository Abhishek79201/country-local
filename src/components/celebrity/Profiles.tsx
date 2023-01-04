/* eslint react/jsx-one-expression-per-line: "off" */
// import useViewport from '../../hooks/useViewport';

import BrandLogoCarousel from './BrandLogoCarousel';
import ProfileDetails from './ProfileDetails';
import ReasonsSlider from './ReasonsSlider';
// import Activities from './Activities';
// import SafetyFeatures from './SafetyFeatures';
// import Offers from './Offers';
// import AboutProperty from './AboutProperty';
// import Experience from './Experience';
// import StayBanner from './StayBanner';
// import HouseRules from './HouseRules';
// import BookingCard from './BookingCard';
// import BookingCardMobile from './popovers/BookingCardMobile';

// import LocationIcon from '../../../public/icons/location.svg';
// import StarIcon from '../../../public/icons/star.svg';
// import ShareIcon from '../../../public/icons/upload.svg';
// import HeartIcon from '../../../public/icons/heart-outline.svg';

const Profiles = () => (
  // const { width } = useViewport();
  <div className="sticky_top_container relative mt-8 md:mt-0 md:pt-14 lg:pt-12">
    <div className="container">
      <div className="flex flex-wrap justify-between lg:flex-nowrap">
        <div className="w-full lg:max-w-[650px] xl:max-w-[730px]">
          <ProfileDetails />

          <BrandLogoCarousel />

          <ReasonsSlider />
          {/* <Activities />
            <SafetyFeatures />
            <Offers />
            <AboutProperty />
            <Experience />
            <StayBanner />
            <HouseRules />
          </div>
          {width > 1063 ? (
            <div className="z-[11] w-[320px] xl:w-[400px]">
              <BookingCard />
            </div>
          ) : (
            <BookingCardMobile />
          )} */}
        </div>
      </div>
    </div>
  </div>
);
export default Profiles;
