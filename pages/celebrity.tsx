import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../src/components/celebrity/Banner';

import CelebrityFaq from '../src/components/celebrity/CelebrityFaq';
import CelebrityProfile from '../src/components/celebrity/CelebrityProfile';
import DeliverySlider from '../src/components/celebrity/DeliverySlider';
import GoodToKnow from '../src/components/celebrity/GoodToknow';
import Intro from '../src/components/celebrity/Intro';
import MoreCelebrities from '../src/components/celebrity/MoreCelebrities';
import PersonSlider from '../src/components/celebrity/PersonSlider';
import PinkPurpleGradient from '../src/components/celebrity/PinkPurpleGradient';
import PreviewAccordion from '../src/components/celebrity/PreviewAccordion';
import Profiles from '../src/components/celebrity/Profiles';
import RecentVideoSlider from '../src/components/celebrity/RecentVideoSlider';
import ServicesSlider from '../src/components/celebrity/ServicesSlider';
import SessionInfoGrid from '../src/components/celebrity/SessionInfoGrid';
import ThingsToKnow from '../src/components/celebrity/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';
import Review from '../src/components/workshop/Review';

const Celebrity: NextPage = () => (
  <>
    <style>
      {`header.mobile_header, .mobile_floating_header {
            display: none;
          }`}
    </style>
    <Head>
      <title>Celebrity: Country Locals</title>
    </Head>
    <div className="bg-[#FBFBFB] pb-10">
      <Intro />

      <Banner />

      <PinkPurpleGradient />

      <SessionInfoGrid />

      <Profiles />

      <PreviewAccordion />

      <ThingsToKnow />

      <CelebrityProfile />

      <GoodToKnow />

      <Review />

      <DeliverySlider />

      <CelebrityFaq />

      <WorkshopExperience />

      <PersonSlider />

      <ServicesSlider />

      <MoreCelebrities />

      <RecentVideoSlider />
    </div>
  </>
);
export default Celebrity;
