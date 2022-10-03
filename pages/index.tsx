/* eslint react/jsx-wrap-multilines: "off" */
import type { NextPage } from 'next';
import Head from 'next/head';
import { bookOffersData, serviceData } from '../src/utilities/dummy-api';

import TourismIntro from '../src/components/workshop/TourismIntro';
import Gallery from '../src/components/workshop/Gallery';
import ServicesSlider from '../src/components/common/ServicesSlider';
import ThingsToKnow from '../src/components/common/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';
import Profiles from '../src/components/workshop/Profiles';
import TouringPlan from '../src/components/Plan/TouringPlan';
import Review from '../src/components/workshop/Review';
import SimilarProperties from '../src/components/workshop/SimilarProperties';
import ReviewSlider from '../src/components/workshop/ReviewSlider';
import AvailableDate from '../src/components/workshop/AvailableDate';
import BookOffers from '../src/components/workshop/BookOffers';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Country Locals</title>
    </Head>
    <div className=" bg-[#fff] pb-10">
      <TourismIntro />

      <Gallery />

      <Profiles />

      <TouringPlan />

      <Review />

      <AvailableDate />

      <ServicesSlider
        sliderId="other_services_slider"
        title={
          <h2 className="mr-7  text-2xl font-bold text-[#202124] lg:text-4xl">
            Other Services by
            <span className="purple_gradient_text_deep">
              {' '}
              Abdullah Faza Farhan
            </span>
          </h2>
        }
        useLine={false}
        data={serviceData}
      />

      <SimilarProperties data={serviceData} />

      <BookOffers
        sliderId="book_one_of_my_offers"
        title={
          <h2 className="mr-7  text-2xl font-bold text-[#202124] lg:text-4xl">
            Book one of
            <span className="purple_gradient_text_deep"> my offers</span>
          </h2>
        }
        data={bookOffersData}
      />

      <ReviewSlider />

      <WorkshopExperience />

      <ThingsToKnow />
    </div>
  </>
);

export default Home;
