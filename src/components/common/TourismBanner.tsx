import Link from 'next/link';
import StarIcon from '../../../public/icons/star.svg';
import ShareIcon from '../../../public/icons/upload.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const TourismBanner = () => (
  <div className="pb-16 pt-16 md:pb-12 md:pt-24">
    <div className="container">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-x-1 text-xs text-[#4A4A4A]">
            <Link href="#">
              <a className="underline">Delhi India</a>
            </Link>
            <span>&gt;</span>
            <Link href="#">
              <a className="underline">Art and Culture</a>
            </Link>
            <span>&gt;</span>
            <Link href="#">
              <a className="underline">Culture and History</a>
            </Link>
            <span>&gt;</span>
            <span className="text-[#808080]">Culture</span>
          </div>
          <h1 className="text-[#222 my-4 text-2xl font-semibold">
            2235 GREAT 3BED / 2.5BATHS IN BRAND NEW BUILDING
          </h1>
          <div className="flex text-xs">
            <div className="svg_icon mr-1 w-4 text-[#FFD166]">
              <StarIcon />
            </div>
            <span className="font-semibold text-[#222]">4.7</span>
            <span className="mr-1 ml-1 text-[#808080]">(25) reviews - </span>
            <span className="text-[#4A4A4A]">
              Greater London, England, United Kingdom
            </span>
          </div>
        </div>
        <div className="flex gap-x-5 text-black">
          <div className="flex items-center">
            <div className="w-[22px]">
              <ShareIcon />
            </div>
            <span className="ml-1 underline">Share</span>
          </div>
          <div className="flex items-center">
            <div className="svg_icon w-[22px] text-transparent">
              <HeartIcon />
            </div>
            <span className="ml-1 underline">Save</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default TourismBanner;
