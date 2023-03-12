import Camping from '../src/components/HomePage/Camping';
import Consumised from '../src/components/HomePage/Consumised';
import DarkConcrete from '../src/components/HomePage/DarkConcrete';
import DestinationTheme from '../src/components/HomePage/DestinationTheme';
import EastExperiences from '../src/components/HomePage/EastExperiences';
import ExploreWithLocal from '../src/components/HomePage/ExploreWithLocal';
import Hero from '../src/components/HomePage/Hero';
import NewsLetter from '../src/components/HomePage/NewsLetter';
import PopularDestination from '../src/components/HomePage/PopularDestination';
import PopularExperience from '../src/components/HomePage/PopularExperience';
import TravelBag from '../src/components/HomePage/TravelBag';
import Video from '../src/components/HomePage/Video';
import Voluntour from '../src/components/HomePage/Voluntour';

const HomePage = () => (
  <>
    <style>
      {`header.mobile_header, .mobile_floating_header {
            display: none;
          }`}
    </style>
    <Hero />
    <DestinationTheme />
    <EastExperiences />
    <PopularDestination />
    <PopularExperience />
    <ExploreWithLocal />
    <Camping />
    <Video />
    <DarkConcrete />
    <Voluntour />
    <Consumised />
    <TravelBag />
    <NewsLetter />
  </>
);
export default HomePage;
