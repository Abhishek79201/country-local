/* eslint-disable @typescript-eslint/naming-convention */
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp } from '../../utilities/animations';

import StarIcon from '../../../public/icons/star.svg';
import HeartIcon from '../../../public/icons/heart.svg';
import ClockIcon from '../../../public/icons/clock.svg';
import RocketIcon from '../../../public/telegram.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint react/require-default-props: "off" */
/* eslint prettier/prettier: "off" */

interface bookCardOffersProps {
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

const FavouriteBookCardOffer = ({
  spotsLeft,
  imgUrl,
  authorImg,
  ageRange,
  price,
  title,
  authors,
  rating,
  offer,
}: bookCardOffersProps) => (
  <Link href="/">
    <motion.a
      variants={fadeInUp}
      className="mx-1 mb-4 block  w-[250px] rounded-xl bg-white "
    >
      <div className="relative w-[250px] rounded">
        <div className=" overflow-hidden rounded-lg">
          <Image src="/boat-girl.png" width={246} height={293} />
        </div>

        <div className="z-1 absolute top-3 right-3 flex items-center rounded-md bg-opacity-20 px-2 py-[3px] text-[8px] font-bold text-transparent">
          <button type="button" className="svg_icon w-[15px] hover:shadow-lg">
            <HeartIcon />
          </button>
        </div>
      </div>
      <div className="px-1 pt-1 pb-2">
        <div className="my-1 flex items-center gap-2">
          <div className="svg_icon w-3 text-[#808080]">
            <RocketIcon />
          </div>
          <p className="semi-bold text-[12px]">Florence, Italy</p>
        </div>
        <div className="mt-[2px] mb-1 flex items-center gap-0">
          <div className="z-10 flex">
            <div className="z-[5] flex h-[54px] w-[54px] overflow-hidden rounded-full border-2 border-white">
              <Image src="/author-head.png" width={54} height={54} />
            </div>
            <motion.span
              variants={{
                initial: { opacity: 0, x: -40 },
                animate: {
                  opacity: 1,
                  x: -15,
                  transition: {
                    duration: 0.5,
                    delay: 1,
                  },
                },
              }}
              className="z-[4] -ml-5 flex h-[54px] w-[54px] overflow-hidden rounded-full border-2 border-white"
            >
              <Image src="/user-2.png" width={50} height={50} alt="user-2" />
            </motion.span>
          </div>
          <div className=" -ml-2 flex flex-col items-center justify-start gap-1 text-[#E71575]">
            <div className="-ml-7 flex items-center gap-1 ">
              <span className="svg_icon inline-block w-[12px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[12px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[12px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[12px]">
                <StarIcon />
              </span>
              <span className="svg_icon inline-block w-[12px]">
                <StarIcon />
              </span>
              <span className="ml-1 mr-3 text-[12px] text-[#808080]">
                (231)
              </span>
            </div>
            <p className="text-[10px] font-semibold text-[#222]">
              Enjoy Florence with
              <span className="  text-[#E71575]"> Olacorno</span>
            </p>

            <div className="z-10 -ml-7 rounded-lg bg-[#E71575] px-3 py-1 text-[10px] font-bold text-[#fff]">
              Choose your favorite local
            </div>
          </div>
        </div>
        <h4 className="text-[14px] font-bold text-[#222]">
          City Escape: Tuscany Day Trip
        </h4>
        <div className="item-center flex gap-2">
          <h4 className="pb-1 text-[12px] font-bold text-[#222]">
            From $2,420/<span className="font-medium">person</span>
          </h4>
          <h5 className="flex items-center gap-1 text-[10px] font-semibold">
            {' '}
            <div className="svg_icon w-2 text-[#292D32]">
              {' '}
              <ClockIcon />{' '}
            </div>{' '}
            7 hours • Day Trip
          </h5>
        </div>
      </div>
    </motion.a>
  </Link>
);
export default FavouriteBookCardOffer;
