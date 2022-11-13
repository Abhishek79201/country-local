import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp } from '../../../utilities/animations';

import StarIcon from '../../../../public/icons/star.svg';
import HeartIcon from '../../../../public/icons/heart.svg';
import GearIcon from '../../../../public/icons/monotone-gear.svg';
import CalendarIcon from '../../../../public/icons/calendar.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint react/require-default-props: "off" */

interface WorkshopProps {
  spotsLeft?: number;
  imgUrl?: string;
  authorImg?: string;
  ageRange?: string;
  price?: number;
  title?: string;
  authors?: string;
  rating?: number;
  offer?: number;
}

const Workshop = ({
  spotsLeft,
  imgUrl,
  authorImg,
  ageRange,
  price,
  title,
  authors,
  rating,
  offer,
}: WorkshopProps) => (
  <Link href="/">
    <a className="mx-3 my-5 block rounded-lg bg-white shadow-lg transition-shadow">
      <div className="relative rounded">
        <div className="flex justify-center overflow-hidden rounded-lg">
          <Image src="/workshop-1.jpg" width={590} height={366} />
        </div>
        <div className="z-1 absolute top-3 left-3 flex items-center rounded-full bg-[#565656] bg-opacity-90 px-2 py-[3px] text-xs font-semibold text-white">
          <div className="svg_icon mr-1 inline-block w-5">
            <GearIcon />
          </div>
          Workshop
        </div>
        <div className="z-1 absolute top-3 right-3 flex items-center rounded-md bg-opacity-20 px-2 py-[3px] text-[8px] font-bold text-transparent">
          <button type="button" className="svg_icon w-5 hover:shadow-lg">
            <HeartIcon />
          </button>
        </div>
      </div>
      <div className="px-5 pt-6 pb-2">
        <div className="-mt-[52px] flex items-end justify-between">
          <div className="z-10 flex">
            <div className="z-[5] flex h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-white">
              <Image src="/author-head.png" width={60} height={60} />
            </div>
            <motion.span
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: 1,
                  },
                },
              }}
              className="z-[4] -ml-3 flex h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-white"
            >
              <Image src="/user-2.png" width={60} height={60} alt="user-2" />
            </motion.span>
          </div>

          <div className="text-xs font-semibold text-[#878787]">
            Age 13 - 16
          </div>
        </div>
        <p className="pb-[3px] pt-2 text-xs font-semibold text-[#878787]">
          {/* By {authors} */}
          By Nate Taylor, Toby and Smith
        </p>
        <p className="pb-2 text-sm font-bold leading-tight">
          {/* {title} */}
          Photography Masterclass: A Complete Guide to Photography
        </p>
        <div className="flex items-center text-[#FFCE31]">
          <span className="svg_icon inline-block w-3">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-3">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-3">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-3">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-3">
            <StarIcon />
          </span>
          <span className="ml-1 mr-3 text-xs font-bold">(231)</span>
          <span className="block rounded-full bg-[#DCF2E8] px-[6px] py-[1px] text-xs text-[#E71575]">
            {/* {offer}%<span className="ml-1">off</span> */}
            30%<span className="ml-1">off</span>
          </span>
        </div>
        <div className="pt-1 pb-1 text-[#878787]">
          <span className="text-xs leading-normal">
            Gerard, MSC, 5 Years of Experience
          </span>
          <div className="mt-1 flex text-xs leading-normal">
            <div className="svg_icon mt-[3px] mr-[5px] inline-block w-4 text-[#0F6378]">
              <CalendarIcon />
            </div>
            <div className="mt-[2px]">
              Meets once, Over 4 weeks <br />
              Mon Sep 13, 6:00-6:30pm, + 19 more times
            </div>
          </div>
        </div>
        <div className="text-right text-sm font-bold">
          From
          {/* <span className="ml-2 text-lg">${price}</span> */}
          <span className="ml-2 text-lg">$420</span>
          <span className="ml-[3px] text-xs font-medium">/ class</span>
        </div>
      </div>
    </a>
  </Link>
);
export default Workshop;
