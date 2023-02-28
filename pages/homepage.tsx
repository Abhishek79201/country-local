import Header from '../src/components/header/Header';
import Camping from '../src/components/HomePage/Camping';
import DestinationTheme from '../src/components/HomePage/DestinationTheme';
import East_Experiences from '../src/components/HomePage/East_Experiences';
import Hero from '../src/components/HomePage/Hero';
import Video from '../src/components/HomePage/Video';
import Voluntour from '../src/components/HomePage/Voluntour';

const HomePage: NextPage = () => (
  <>
    <style>
      {`header.mobile_header, .mobile_floating_header {
            display: none;
          }`}
    </style>
    <Hero />
    <DestinationTheme />
    <East_Experiences />
    <Camping />
    <Video />
    <Voluntour />
  </>
);
export default HomePage;
