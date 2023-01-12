import useViewport from '../../hooks/useViewport';

import BrandLogoCarousel from './BrandLogoCarousel';
import ProfileDetails from './ProfileDetails';
import ReasonsSlider from './ReasonsSlider';

const Profiles = () => {
  const { width } = useViewport();
  return (
    <div className="sticky_top_container relative mt-8 md:mt-0 md:pt-14 lg:pt-12">
      <div className="container">
        <div className="flex flex-wrap justify-between lg:flex-nowrap">
          <div className="w-full lg:max-w-[650px] xl:max-w-[730px]">
            <ProfileDetails />

            <BrandLogoCarousel />

            <ReasonsSlider />
          </div>
          {width > 1063 ? (
            <div className="z-[11] w-[320px] xl:w-[400px]">
              {/* <BookingCard /> */}
              <div> The sidebar would be here.</div>
            </div>
          ) : (
            // <BookingCardMobile />
            <div> The sidebar would be here.</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profiles;
