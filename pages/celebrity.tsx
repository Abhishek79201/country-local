import type { NextPage } from 'next';
import Head from 'next/head';

import CelebrityFaq from '../src/components/celebrity/CelebrityFaq';
import DeliverySlider from '../src/components/celebrity/DeliverySlider';
import GoodToKnow from '../src/components/celebrity/GoodToknow';
import Intro from '../src/components/celebrity/Intro';
import PinkPurpleGradient from '../src/components/celebrity/PinkPurpleGradient';
import PreviewAccordion from '../src/components/celebrity/PreviewAccordion';
import Profiles from '../src/components/celebrity/Profiles';
import SessionInfoGrid from '../src/components/celebrity/SessionInfoGrid';
import ThingsToKnow from '../src/components/celebrity/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';
import Review from '../src/components/workshop/Review';

const Celebrity: NextPage = () => (
  <>
    <Head>
      <title>Celebrity: Country Locals</title>
    </Head>
    <div className="bg-[#FBFBFB] pb-10">
      <Intro />

      <PinkPurpleGradient />

      <SessionInfoGrid />

      <Profiles />

      <PreviewAccordion />

      <ThingsToKnow />

      <GoodToKnow />

      <Review />

      <DeliverySlider />

      <CelebrityFaq />

      <WorkshopExperience />
    </div>
  </>
);
export default Celebrity;
