/* eslint-disable max-len */
import type { NextPage } from 'next';
import Head from 'next/head';
import { bookOffersData, serviceData } from '../src/utilities/dummy-api';

// import BannerWithImageGrid from '../src/components/common/BannerWithImageGrid';
// import GreenBlueGradient from '../src/components/common/GreenBlueGradient';
// import SessionInfoGrid from '../src/components/common/SessionInfoGrid';
// import GoodToKnow from '../src/components/common/GoodToKnow';
// import DarkThreeColumns from '../src/components/common/DarkThreeColumns';
import ServicesSlider from '../src/components/common/ServicesSlider';
import ThingsToKnow from '../src/components/common/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';
// import FrequentlyAskedQuestions from '../src/components/common/FAQ';
// import MentorCards from '../src/components/common/MentorCards';
// import ClassSchedule from '../src/components/common/ClassSchedule';
// import OngoingCourse from '../src/components/common/OngoingCourse';
// import CourseCard from '../src/components/common/CourseCard';
// import CourseDetails from '../src/components/multi-day-workshop/CourseDetails';
// import ImageSlider from '../src/components/common/ImageSlider';
// import CourseCurriculum from '../src/components/common/CourseCurriculum';
// import Reviews from '../src/components/common/Reviews';

// import BoxIcon from '../public/icons/box.svg';
// import TimerIcon from '../public/icons/recently-viewed.svg';
import TourismBanner from '../src/components/common/TourismBanner';
import Profiles from '../src/components/workshop/Profiles';
import TouringPlan from '../src/components/Plan/TouringPlan';
import Review from '../src/components/workshop/Review';
import SimilarProperties from '../src/components/workshop/SimilarProperties';
import ReviewSlider from '../src/components/workshop/ReviewSlider';
import AvailableDate from '../src/components/workshop/AvailableDate';
import Banner from '../src/components/workshop/Banner';
import BookOffers from '../src/components/workshop/BookOffers';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-wrap-multilines: "off" */
const MultiDayWorkshop: NextPage = () => (
  <>
    <Head>
      <title>Country Locals</title>
    </Head>
    <div className=" bg-[#fff] pb-10">
      <TourismBanner />

      <Banner />

      <Profiles />

      <TouringPlan />

      <Review />
      <AvailableDate />
      {/* <GreenBlueGradient /> */}

      {/* <SessionInfoGrid /> */}

      {/* <CourseDetails /> */}

      {/* <GoodToKnow /> */}

      {/* <Reviews /> */}

      {/* <CourseCurriculum /> */}

      {/* <ImageSlider /> */}

      {/* <OngoingCourse /> */}

      {/* <CourseCard /> */}

      {/* <ClassSchedule sliderId="available_class_schedule" /> */}

      {/* <MentorCards /> */}

      {/* <FrequentlyAskedQuestions /> */}

      <ServicesSlider
        sliderId="other_services_slider"
        title={
          <h2 className="mr-7  text-[20px] font-bold text-black md:text-[24px]">
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

      {/* <ServicesSlider
        sliderId="more_services_slider"
        title={
          <h2 className="mr-7  text-[20px] font-bold text-black md:text-[24px]">
            Similer
            <span className="purple_gradient_text"> Properites</span>
          </h2>
        }
        data={serviceData}
      /> */}
      <SimilarProperties data={serviceData} />
      <BookOffers
        sliderId="book_one_of_my_offers"
        title={
          <h2 className="mr-7  text-[20px] font-bold text-black md:text-[24px]">
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

export default MultiDayWorkshop;
