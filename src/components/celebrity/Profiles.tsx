import BrandLogoCarousel from './BrandLogoCarousel';
import ProfileDetails from './ProfileDetails';
import ReasonsSlider from './ReasonsSlider';

const Profiles = () => (
  <div className="sticky_top_container relative mt-8 md:mt-0 md:pt-14 lg:pt-12">
    <div className="container">
      <div className="flex flex-wrap justify-between lg:flex-nowrap">
        <div className="w-full lg:max-w-[650px] xl:max-w-[730px]">
          <ProfileDetails />

          <BrandLogoCarousel />

          <ReasonsSlider />
        </div>
      </div>
    </div>
  </div>
);
export default Profiles;
