/* eslint @next/next/no-img-element: "off" */
import { useState } from 'react';
import { decrementItem, incrementItem } from '../../../utilities/helpers';

const GuestsPopover = () => {
  const [totalAdults, setTotalAdults] = useState<number>(0);
  const [totalChildren, setTotalChildren] = useState<number>(0);
  const [totalInfants, setTotalInfants] = useState<number>(0);

  const handleIncrement = (type: string) => {
    if (type === 'adults') {
      const value = incrementItem(totalAdults);
      setTotalAdults(value);
    } else if (type === 'child') {
      const value = incrementItem(totalChildren);
      setTotalChildren(value);
    } else if (type === 'infants') {
      const value = incrementItem(totalInfants);
      setTotalInfants(value);
    }
  };

  const handleDecrement = (type: string) => {
    if (type === 'adults') {
      const value = decrementItem(totalAdults);
      setTotalAdults(value);
    } else if (type === 'child') {
      const value = decrementItem(totalChildren);
      setTotalChildren(value);
    } else if (type === 'infants') {
      const value = decrementItem(totalInfants);
      setTotalInfants(value);
    }
  };

  return (
    <div className="absolute left-0 top-[70px] z-10 -ml-[2px] w-[101.5%] rounded-xl bg-white px-5 py-8 shadow-spread">
      <div className="flex items-center justify-between border-b border-[#ddd] pb-5">
        <div>
          <p className="text-base font-semibold leading-none text-[#222]">
            Adults
          </p>
          <span className="mt-2 block text-[13px] leading-none text-[#717171]">
            Ages 13 or above
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleDecrement('adults');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
            disabled={totalAdults === 0}
          >
            <img
              src="https://img.icons8.com/material-outlined/96/000000/minus.png"
              alt="-"
              width={14}
            />
          </button>
          <div className="min-w-[35px] text-center font-medium text-[#222]">
            {totalAdults}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleIncrement('adults');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E]"
          >
            <img
              src="https://img.icons8.com/android/96/000000/plus.png"
              alt="+"
              width={14}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#ddd] pb-5 pt-5">
        <div>
          <p className="text-base font-semibold leading-none text-[#222]">
            Children
          </p>
          <span className="mt-2 block text-[13px] leading-none text-[#717171]">
            Ages 2-12
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleDecrement('child');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
            disabled={totalChildren === 0}
          >
            <img
              src="https://img.icons8.com/material-outlined/96/000000/minus.png"
              alt="-"
              width={14}
            />
          </button>
          <div className="min-w-[35px] text-center font-medium text-[#222]">
            {totalChildren}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleIncrement('child');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E]"
          >
            <img
              src="https://img.icons8.com/android/96/000000/plus.png"
              alt="+"
              width={14}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-5">
        <div>
          <p className="text-base font-semibold leading-none text-[#222]">
            Infants
          </p>
          <span className="mt-2 block text-[13px] leading-none text-[#717171]">
            Under 2
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleDecrement('infants');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
            disabled={totalInfants === 0}
          >
            <img
              src="https://img.icons8.com/material-outlined/96/000000/minus.png"
              alt="-"
              width={14}
            />
          </button>
          <div className="min-w-[35px] text-center font-medium text-[#222]">
            {totalInfants}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleIncrement('infants');
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E]"
          >
            <img
              src="https://img.icons8.com/android/96/000000/plus.png"
              alt="+"
              width={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default GuestsPopover;
