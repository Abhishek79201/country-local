/* eslint-disable @typescript-eslint/naming-convention */
import Image from 'next/image';
import Link from 'next/link';

import HeartIcon from '../../../public/icons/heart.svg';
import RocketIcon from '../../../public/telegram.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint react/require-default-props: "off" */
/* eslint prettier/prettier: "off" */

interface SimilarPropertiesCardTypes {
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

const SimilarPropertiesCard = ({
  spotsLeft,
  imgUrl,
  authorImg,
  ageRange,
  price,
  title,
  authors,
  rating,
  offer,
}: SimilarPropertiesCardTypes) => (
  <Link href="/">
    <a
      className="mx-3 my-5 block rounded-xl bg-white"
      style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
    >
      <div className="relative rounded">
        <div className="flex overflow-hidden rounded-lg">
          <Image src="/boat-girl.png" width={314} height={300} />
        </div>

        <div className="z-1 absolute top-3 right-3 flex items-center rounded-md bg-opacity-20 px-2 py-[3px] text-[8px] font-bold text-transparent">
          <button type="button" className="svg_icon w-6 hover:shadow-lg">
            <HeartIcon />
          </button>
        </div>
      </div>
      <div className="px-4 pt-3 pb-4">
        <div className="my-1 flex items-center gap-2">
          <div className="svg_icon w-3 text-[#808080]">
            <RocketIcon />
          </div>
          <p className="semi-bold text-sm">
            Florence, <span className="text-pink_primary">Italy</span>
          </p>
        </div>
        <h4 className="pt-1 pb-1 text-lg font-bold leading-normal">
          Beautiful Family Friendly 3BR Condo
        </h4>
        <p className="text-sm text-[#4B4B4B]">Sleeps 8 . 3 bedrooms . 6 beds</p>

        <div className="item-center mt-4 flex justify-between border-t-2 border-dashed border-t-slate-200 pt-3 text-base">
          <div>
            from <span className="font-bold text-pink_primary">$600/night</span>
          </div>
          <div className="flex items-center">
            <Image src="/icons/star-pink.png" width={14} height={14} />
            <span className="purple_gradient_text ml-1">New</span>
          </div>
        </div>
      </div>
    </a>
  </Link>
);
export default SimilarPropertiesCard;
