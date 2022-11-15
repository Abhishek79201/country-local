/* eslint react/no-array-index-key: "off" */
import Image from 'next/image';

import Arrow from '../../../public/icons/arrow.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';
import FacebookIcon from '../../../public/icons/facebook-square.svg';
import TwitterIcon from '../../../public/icons/twitter-square.svg';
import SnapchatIcon from '../../../public/icons/snapchat-square.svg';

const Footer = () => (
  <div className="footer relative min-h-[740px] w-[full] ">
    <div className=" absolute -top-0 h-4 w-full rounded-bl-[20px] rounded-br-[20px] bg-[#fff] md:h-16 md:rounded-bl-[50px] md:rounded-br-[50px] ">
      {/* // */}
    </div>
    <div className="container pb-[350px] pt-4 md:pt-[110px] lg:pb-0">
      <div className="flex flex-wrap justify-between pt-10 pb-2 md:pb-10 lg:px-10">
        <div className="pb-10 lg:w-[30%]">
          <h3 className="pb-2 text-3xl font-bold text-[#fff] lg:text-[36px]">
            Countrylocals
          </h3>
          <p className="text-2xl font-medium text-[#fff]">
            Fancy seeing you down here.
          </p>
        </div>
        <div className="menu flex w-full flex-wrap justify-between gap-3 pb-10 sm:gap-10 lg:w-[60%]">
          <div className="lg:w-1/4 ">
            <p className="mb-3 text-sm font-bold text-[#FFF]">
              How does it work
            </p>
            <div>
              {['Sale', 'Events', 'Sale', 'Events'].map((item, index) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 text-[#fff] hover:text-pink_primary"
                  key={index}
                >
                  <div className="svg_icon w-2">
                    <Arrow />
                  </div>
                  <span className="text-[14px]">{item}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 ">
            <h3 className="mb-3 text-sm font-bold text-[#FFF]">ABOUT</h3>
            <div>
              {['Sale', 'Events', 'Sale', 'Events'].map((item, index) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 text-[#fff] hover:text-pink_primary"
                  key={index}
                >
                  <div className="svg_icon w-2">
                    <Arrow />
                  </div>
                  <span className="text-[14px]">{item}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 ">
            <h3 className="mb-3 text-sm font-bold text-[#FFF]">
              OUR INITIATIVES
            </h3>
            <div>
              {['ToS', 'Rules', 'Sale'].map((item, index) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 text-[#fff] hover:text-pink_primary"
                  key={index}
                >
                  <div className="svg_icon w-2">
                    <Arrow />
                  </div>
                  <span className="text-[14px]">{item}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-10">
        <div className="mb-3 h-[1px] w-full bg-[#fff] md:mb-1" />
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap items-center gap-2 lg:gap-3 xl:gap-4">
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              TERMS OF USER
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              NEWSLETTER
            </a>
            <span className="text-[14px] uppercase text-[#fff]">•</span>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              Copyright CountryLocals 2022. All Rights Reserved.
            </a>
          </div>
          <div className="flex items-center gap-3 pt-3 lg:gap-2 lg:pt-1 xl:gap-3">
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <InstagramIcon />
              </div>
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <FacebookIcon />
              </div>
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <TwitterIcon />
              </div>
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <SnapchatIcon />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-[95%] max-w-[1200px] -translate-x-1/2  transform rounded-tl-[20px] rounded-tr-[20px] bg-black px-5 pt-6 pb-14 md:rounded-tl-[50px] md:rounded-tr-[50px] md:px-10">
        <div className="flex items-center justify-between pb-5">
          <div className="svg_icon w-[110px] text-[#fff]">
            <Image src="/icons/logo.png" width="110px" height="48px" />
          </div>
          <button
            type="button"
            className="flex h-[33px] w-[33px] items-center justify-center rounded border"
          >
            <div className="svg_icon w-2 rotate-90 text-[#fff]">
              <Arrow />
            </div>
          </button>
        </div>
        <p className="pb-2 text-[20px] font-bold text-[#fff]">
          Country locals.com
        </p>
        <p className="pb-14 text-[20px] font-thin text-[#fff] lg:pb-0">
          Experience New Experiences
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
