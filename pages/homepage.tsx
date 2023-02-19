import Header from '../src/components/header/Header';
import Hero from '../src/components/HomePage/Hero';

const HomePage: NextPage = () => (
  <>
    <style>
      {`header.mobile_header, .mobile_floating_header {
            display: none;
          }`}
    </style>
    <Hero />
  </>
);
export default HomePage;
