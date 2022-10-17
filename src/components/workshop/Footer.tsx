import Image from 'next/image';
import React from 'react';
import Arrow from '../../../public/icons/arrow.svg';
import SocialIcon from '../../../public/icons/awesome-instagram.svg';

const Footer = () => (
  <div className="footer relative min-h-[800px] w-[full] ">
    <div className=" absolute -top-0 h-16 w-full rounded-bl-[50px] rounded-br-[50px] bg-[#fff] ">
      {/* // */}
    </div>
    <div className="container py-[110px] pb-[350px] lg:pb-0">
      <div className="flex flex-wrap justify-between pt-10 pb-10 lg:px-10">
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
              {[1, 2, 3, 4].map((item) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 text-[#fff] hover:text-pink_primary"
                  key={item}
                >
                  <div className="svg_icon w-2">
                    <Arrow />
                  </div>
                  <span className="text-[14px]">Event</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 ">
            <h3 className="mb-3 text-sm font-bold text-[#FFF]">ABOUT</h3>
            <div>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 text-[#fff] hover:text-pink_primary"
                  key={item}
                >
                  <div className="svg_icon w-2">
                    <Arrow />
                  </div>
                  <span className="text-[14px]">About</span>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 ">
            <h3 className="mb-3 text-sm font-bold text-[#FFF]">
              OUR INITIATIVES
            </h3>
            <div>
              {[1, 2, 3].map((item) => (
                <a
                  href="#"
                  className="flex items-center gap-3 py-1 text-[#fff] hover:text-pink_primary"
                  key={item}
                >
                  <div className="svg_icon w-2">
                    <Arrow />
                  </div>
                  <span className="text-[14px]">Rules</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-10">
        <div className="mb-1 h-[1px] w-full bg-[#fff]">{/* // */}</div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap items-center gap-2 lg:gap-4">
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              •
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              Copyright EntorOcean inc. 2022. All Rights Reserved.
            </a>
          </div>
          <div className="flex items-center gap-3 pt-6 lg:pt-1">
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <SocialIcon />
              </div>
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <SocialIcon />
              </div>
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <SocialIcon />
              </div>
            </a>
            <a href="#" className="text-[14px] uppercase text-[#fff]">
              <div className="svg_icon w-5">
                <SocialIcon />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute  bottom-0 left-1/2 w-[80%] -translate-x-1/2  transform rounded-tl-[50px] rounded-tr-[50px] bg-black px-10 pt-6 pb-14">
        <div className="flex items-center justify-between pb-5">
          <div className="svg_icon w-[110px] text-[#fff]">
            <Image src="/icons/logo.png" width="110px" height="48px" />
          </div>
          <button
            type="button"
            className="  hidden h-[33px] w-[33px] items-center justify-center rounded border"
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
