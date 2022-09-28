/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @next/next/no-img-element: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
import { useState } from 'react';
import Image from 'next/image';

import StarIcon from '../../../public/icons/star.svg';
import QuestionMarkIcon from '../../../public/icons/question-mark.svg';
import BookInfoPopups from './popovers/BookInfoPopups';

const BookingCard = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="booking-card w-full max-w-[425px] overflow-hidden rounded-[20px] pb-8 shadow-spread">
      <div className="relative overflow-hidden pb-[52%]">
        <img
          src="/book-card.jpg"
          alt="book-card-bg"
          className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform"
        />
        <div className="absolute left-4 top-4 rounded-full bg-pink_primary px-4 py-[6px] text-xs text-white">
          Instantly Confirmed
        </div>
      </div>
      <div className="px-10">
        <div className="relative mx-auto -mt-[42px] h-[84px] w-[84px] overflow-hidden rounded-full border-[3px] border-white">
          <Image src="/book-card-author.jpg" alt="avatar" layout="fill" />
        </div>
        <h3 className="mt-6 mb-3 text-center text-2xl font-bold leading-snug">
          The Best of Berling in a Convertible Car
        </h3>
        <div className="flex items-center justify-center text-center text-xl">
          <span className="mr-3">Hosted by</span>
          <Image src="/miha.png" width={51} height={22} />
        </div>
        <div className="mt-3 mb-6 flex items-center justify-center text-center text-sm">
          <div className="font-semibold">
            From $45 <span className="line-through">$567</span> / night
          </div>
          <div className="ml-3 flex items-center">
            <div className="svg_icon mr-1 w-[13px] shrink-0">
              <StarIcon />
            </div>
            <span className="mr-2">4.6</span>
            <span className="underline">(25)reviews</span>
          </div>
        </div>
        <div className="rounded-lg border border-[#808080]">
          <div className="flex border-b border-b-[#808080]">
            <button
              type="button"
              className="flex-1 border-r border-r-[#808080] px-4 py-4 text-left text-xs font-semibold"
            >
              CHECK-IN
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-4 text-left text-xs font-semibold"
            >
              CHECK-OUT
            </button>
          </div>
          <div className="flex px-4 py-4">
            <button
              type="button"
              className="flex-1 text-left text-xs font-semibold"
            >
              GUESTS
            </button>
          </div>
        </div>
        <div className="mt-5 mb-7">
          <div className="flex items-center">
            <div className="text-sm font-semibold">Book for Private Group</div>
            <button
              type="button"
              className="svg_icon ml-2 w-[14px] rounded-full bg-black text-white"
              onClick={() => setOpenPopup(true)}
            >
              <QuestionMarkIcon />
            </button>
            <label className="switch ml-auto">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
            <BookInfoPopups
              status={openPopup}
              onClose={() => setOpenPopup(false)}
            />
          </div>
        </div>
        <button
          type="button"
          className="mb-3 w-full rounded-xl bg-pink_primary py-3 text-base font-bold text-white"
        >
          Request To Book
        </button>
        <p className="text-center text-xs">You won’t be charged yet</p>
      </div>
    </div>
  );
};
export default BookingCard;
