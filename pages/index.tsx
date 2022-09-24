/* eslint-disable max-len */
import type { NextPage } from 'next';
import Head from 'next/head';
import { serviceData } from '../src/utilities/dummy-api';

import ServicesSlider from '../src/components/common/ServicesSlider';
import ThingsToKnow from '../src/components/common/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';

import TourismBanner from '../src/components/common/TourismBanner';
import Profiles from '../src/components/workshop/Profiles';
import TouringPlan from '../src/components/Plan/TouringPlan';
import Review from '../src/components/workshop/Review';
import SimilarProperties from '../src/components/workshop/SimilarProperties';
import ReviewSlider from '../src/components/workshop/ReviewSlider';
import AvailableDate from '../src/components/workshop/AvailableDate';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-wrap-multilines: "off" */
const MultiDayWorkshop: NextPage = () => (
  <>
    <Head>
      <title>Country Locals</title>
    </Head>
    <div className="rounded-[1000px] bg-[#fff] pb-20">
      <TourismBanner />

      <Profiles />

      <TouringPlan />

      <Review />

      <AvailableDate />

      <ServicesSlider
        sliderId="other_services_slider"
        title={
          <h2 className="mr-7  text-[20px] font-bold text-black md:text-[24px]">
            Other Services by
            <span className="purple_gradient_text"> Abdullah Faza Farhan</span>
          </h2>
        }
        useLine={false}
        data={serviceData}
      />

      <SimilarProperties data={serviceData} />

      <ServicesSlider
        sliderId="book_one_of_my_offers"
        title={
          <h2 className="mr-7  text-[20px] font-bold text-black md:text-[24px]">
            Book one of
            <span className="purple_gradient_text"> my offers</span>
          </h2>
        }
        data={serviceData}
      />

      <ReviewSlider />

      <WorkshopExperience />

      <ThingsToKnow />
    </div>
  </>
);

export default MultiDayWorkshop;
