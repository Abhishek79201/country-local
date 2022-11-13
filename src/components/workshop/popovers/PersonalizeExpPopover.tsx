import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface PersonalizeExperiencePopoverTypes {
  status: boolean;
  onClose: () => void;
}

const PersonalizeExperiencePopover = ({
  status,
  onClose,
}: PersonalizeExperiencePopoverTypes) => {
  const { width } = useViewport();
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
          className="fixed inset-0 z-30 md:flex md:items-center md:justify-center"
        >
          <Dialog.Overlay
            onClick={() => {
              if (width < 768) {
                setGlobalOverflow(false);
              }
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
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[550px]"
          >
            <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
              <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
                <button
                  type="button"
                  className="group absolute right-4 top-2 p-2 md:top-3"
                  onClick={() => {
                    onClose();
                    setGlobalOverflow(false);
                  }}
                >
                  <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#000]">
                    <CloseIcon />
                  </div>
                </button>
                <h4 className="text-center text-lg font-bold text-black">
                  Personalize your experience
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 70 : 'auto',
                }}
              >
                <div>
                  <div className="flex border-b border-b-[#E8E8E8] pb-5">
                    <div className="mr-5 h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                      <Image src="/author-head.png" width={80} height={80} />
                    </div>
                    <div className="text-xs md:text-sm">
                      <h3 className="text-[20px] font-bold text-[#EE1898]">
                        Hello!
                      </h3>
                      <p className="py-2">
                        Thanks for getting in touch.
                        <br />
                        Let’s Personalize your experience
                      </p>
                      <button
                        type="button"
                        className="text-left font-bold text-pink_primary hover:text-purple-700"
                      >
                        Or just ask me a question &gt;
                      </button>
                    </div>
                  </div>
                  <div className="pt-5">
                    <h3 className="mb-2 text-xl font-semibold">
                      Request another time
                    </h3>
                    <p className="text-sm">
                      Please send the details of your request including date,
                      time, number of learners, and budget.
                    </p>
                  </div>
                  <div className="border-b border-b-[#E8E8E8] pt-5 pb-5">
                    <h3 className="mb-1 text-lg font-semibold">
                      Request a Slot
                    </h3>
                    <p className="text-sm">Suggest suitable days & time</p>
                  </div>
                  <div className="flex flex-wrap pb-5 md:pt-5">
                    <div className="mt-5 w-full md:mt-0 md:w-1/2">
                      <h4 className="mb-2">Type *</h4>
                      <div className="flex flex-row flex-wrap gap-y-4 md:flex-nowrap md:gap-y-2">
                        {['Group', 'Individual'].map((day) => (
                          <div
                            key={day}
                            className="mr-4 flex w-full flex-row-reverse items-center md:flex-row"
                          >
                            <input
                              type="radio"
                              id={day}
                              name="classStarting"
                              className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                            />
                            <label
                              htmlFor={day}
                              className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                            >
                              {day}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 w-full md:mt-0 md:w-1/2">
                      <h4 className="mb-2">Slots *</h4>
                      <select
                        name="slots"
                        id="slots"
                        className="w-full rounded-lg border-2 border-[#E8E8E8] p-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary"
                      >
                        <option value="1">Slot 1</option>
                        <option value="2">Slot 2</option>
                        <option value="3">Slot 3</option>
                        <option value="4">Slot 4</option>
                      </select>
                    </div>
                    <div className="mt-5 w-full md:mt-0 md:w-1/2">
                      <h4 className="mb-2">Select Time *</h4>
                      <select
                        name="times"
                        id="times"
                        className="w-full rounded-lg border-2 border-[#E8E8E8] p-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary"
                      >
                        <option value="1">Morning</option>
                        <option value="2">Noon</option>
                        <option value="3">After Noon</option>
                        <option value="4">Evening</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="mb-5">
                      Is there anything you’d like me to customise for your
                      exprience
                    </p>
                    <textarea
                      name="contact-text"
                      rows={7}
                      placeholder="Hi! Would it be possible to have an extended virtual tour with some extra stories about what life is currently like in your city?"
                      className="w-full rounded-lg border-2 border-[#E8E8E8] p-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="mb-5">With whom will you be joining?</p>
                    <textarea
                      name="contact-text"
                      rows={7}
                      placeholder="Hi! Would it be possible to have an extended virtual tour with some extra stories about what life is currently like in your city?"
                      className="w-full rounded-lg border-2 border-[#E8E8E8] p-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink_primary"
                    />
                    <button
                      type="submit"
                      className="purple_gradient_bg mt-4 w-full rounded-full px-3 py-3 font-bold text-white"
                    >
                      Request a personalized offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default PersonalizeExperiencePopover;
