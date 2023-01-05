import type { NextPage } from 'next';
import Head from 'next/head';

import WorkshopExperience from '../src/components/common/WorkshopExperience';
import Review from '../src/components/workshop/Review';
import Intro from '../src/components/celebrity/Intro';
import PinkPurpleGradient from '../src/components/celebrity/PinkPurpleGradient';
import Profiles from '../src/components/celebrity/Profiles';
import SessionInfoGrid from '../src/components/celebrity/SessionInfoGrid';
import ThingsToKnow from '../src/components/celebrity/ThingsToKnow';
import GoodToKnow from '../src/components/celebrity/GoodToknow';
import DeliverySlider from '../src/components/celebrity/DeliverySlider';
import CelebrityFaq from '../src/components/celebrity/CelebrityFaq';

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
