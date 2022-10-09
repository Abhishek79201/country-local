/* eslint @next/next/no-img-element: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { useState, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import { decrementItem, incrementItem } from '../../../utilities/helpers';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface BookingCalendarMobileTypes {
  status: boolean;
  onClose: () => void;
}

const GuestsPopoverMobile = ({
  status,
  onClose,
}: BookingCalendarMobileTypes) => {
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

  const { setGlobalOverflow } = useContext(OverflowContext);

  return (
    <AnimatePresence>
      {status && (
        <Dialog
          static
          as={motion.div}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            exit: { opacity: 0 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          open={status}
          onClose={onClose}
          className="fixed inset-0 z-30"
        >
          <Dialog.Overlay
            onClick={() => {
              setGlobalOverflow(false);
            }}
            className="absolute top-0 left-0 h-full w-full bg-black opacity-40"
          />

          <Dialog.Panel
            as={motion.div}
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              },
              exit: {
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            className="fixed bottom-0 z-10 w-full"
          >
            <div className="relative rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
              <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
                <button
                  type="button"
                  className="group absolute right-4 top-2 p-2 md:top-3"
                  onClick={() => {
                    onClose();
                    setGlobalOverflow(false);
                  }}
                >
                  <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#76F4BA]">
                    <CloseIcon />
                  </div>
                </button>
                <h4 className="text-center text-lg font-bold text-black">
                  Guests
                </h4>
              </div>

              <div className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 md:max-h-[70vh]">
                <div className="w-full">
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
              </div>
              <div className="flex items-center justify-between border-t border-t-[#EAEAEA] px-5 py-3 md:py-3">
                <button
                  type="button"
                  className="text-sm font-semibold text-[#959595] md:text-base"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    setGlobalOverflow(true);
                  }}
                  className="rounded-full bg-[#E71575] px-8 py-2 text-sm font-semibold text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default GuestsPopoverMobile;
