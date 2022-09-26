/* eslint-disable @typescript-eslint/no-shadow */
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  fadeInUp,
  animationWrapper,
  slideToggle,
} from '../../utilities/animations';

import ArrowDownIcon from '../../../public/icons/chevron-down.svg';
import CloseIcon from '../../../public/icons/xmark.svg';
import LocationIcon from '../../../public/icons/location.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const TripDetails = () => (
  <div className=" container relative">
    <div className=" max-w-[749px]">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pb-6 text-center md:pb-12"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase text-[#E71575] md:text-lg"
        >
          WE’RE HERE To create wonderful memories
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="pb-3 text-[24px] font-bold leading-tight md:text-[42px]"
        >
          Here Are The Trip Details
        </motion.h2>
      </motion.div>

      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mx-auto pb-8 lg:max-w-[820px]"
      >
        {[1, 2, 3, 4].map((item) => (
          <Disclosure as={motion.div} variants={fadeInUp} key={item}>
            {({ open }) => (
              <div className="mb-4 rounded-md px-2 pt-2 pb-2 shadow-spread md:px-4">
                <Disclosure.Button className="focus-purple relative flex w-full gap-3 px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-[20px]">
                  <span>
                    <Image
                      src="/icons/purple-calendar.png"
                      width={22}
                      height={22}
                    />
                  </span>
                  Program
                  {open ? (
                    <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                      <CloseIcon />
                    </span>
                  ) : (
                    <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                      <ArrowDownIcon />
                    </span>
                  )}
                </Disclosure.Button>

                <AnimatePresence>
                  {open && (
                    <Disclosure.Panel
                      static
                      as={motion.div}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={slideToggle}
                      className="px-3"
                    >
                      <Disclosure>
                        {({ open }) => (
                          <div className=" relative mb-4 flex flex-col items-center justify-center">
                            <div className="absolute -left-0 top-6 z-10 h-[96%] w-[1px] border-[1px] border-dashed border-r-[#E71575] md:left-[10px] ">
                              {/**/}
                            </div>
                            <div className=" svg_icon absolute -left-3 top-2 z-10 w-[26px] shrink-0 text-[#E71575] md:-left-[1px]">
                              <LocationIcon />
                            </div>
                            <Disclosure.Button className="focus-purple relative w-[90%] text-left text-[16px] font-bold ">
                              <div className="mb-3 flex w-full items-center justify-between rounded bg-[#F8F8F8] p-2 px-5 pl-3 text-[#4A4A4A]">
                                <h3 className="pl-1">Day One</h3>
                                {open ? (
                                  <span className="svg_icon absolute right-3 top-3 inline-block w-[15px] rotate-180 text-transparent md:w-[18px]">
                                    <ArrowDownIcon />
                                  </span>
                                ) : (
                                  <span className="svg_icon inline-block w-[15px]  text-transparent md:w-[18px]">
                                    <ArrowDownIcon />
                                  </span>
                                )}
                              </div>
                              {!open && (
                                <div className="flex items-center gap-5 p-2 pl-3">
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Ramboda Waterfalls
                                  </button>
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Golf Course
                                  </button>
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Ramboda Waterfalls
                                  </button>
                                </div>
                              )}
                            </Disclosure.Button>

                            <AnimatePresence>
                              {open && (
                                <Disclosure.Panel
                                  static
                                  as={motion.div}
                                  initial="initial"
                                  animate="animate"
                                  exit="exit"
                                  variants={slideToggle}
                                  className=""
                                >
                                  {[1, 2, 3].map((item) => (
                                    <div
                                      key={item}
                                      className="ml-5 max-w-[590px] pt-3 md:ml-0"
                                    >
                                      <h1 className="pb-2 text-base font-semibold text-[#222]">
                                        <Image
                                          src="/icons/morning.png"
                                          width={30}
                                          height={18}
                                        />
                                        <span className="pl-2"> Morning :</span>
                                      </h1>
                                      <p className="text-[14px] text-[#808080]">
                                        upon your arrival at the Lisu Lodge (9
                                        am.) you will be welcomed with a
                                        refreshing traditional drink. Then,
                                        following a cycling tour around the
                                        village (13 kilometers or 8 miles).
                                      </p>
                                    </div>
                                  ))}
                                </Disclosure.Panel>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <div className=" relative mb-4 flex flex-col items-center justify-center">
                            <div className="absolute -left-0 top-6 z-10 h-[96%] w-[1px] border-[1px] border-dashed border-r-[#E71575] md:left-[10px] ">
                              {/**/}
                            </div>
                            <div className=" svg_icon absolute -left-3 top-2 z-10 w-[26px] shrink-0 text-[#E71575] md:-left-[1px]">
                              <LocationIcon />
                            </div>
                            <Disclosure.Button className="focus-purple relative w-[90%] text-left text-[16px] font-bold ">
                              <div className="mb-3 flex w-full items-center justify-between rounded bg-[#F8F8F8] p-2 px-5 pl-3 text-[#4A4A4A]">
                                <h3 className="pl-1">Day One</h3>
                                {open ? (
                                  <span className="svg_icon absolute right-3 top-3 inline-block w-[15px] rotate-180 text-transparent md:w-[18px]">
                                    <ArrowDownIcon />
                                  </span>
                                ) : (
                                  <span className="svg_icon inline-block w-[15px]  text-transparent md:w-[18px]">
                                    <ArrowDownIcon />
                                  </span>
                                )}
                              </div>
                              {!open && (
                                <div className="flex items-center gap-5 p-2 pl-3">
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Ramboda Waterfalls
                                  </button>
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Golf Course
                                  </button>
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Ramboda Waterfalls
                                  </button>
                                </div>
                              )}
                            </Disclosure.Button>

                            <AnimatePresence>
                              {open && (
                                <Disclosure.Panel
                                  static
                                  as={motion.div}
                                  initial="initial"
                                  animate="animate"
                                  exit="exit"
                                  variants={slideToggle}
                                  className=""
                                >
                                  {[1, 2, 3].map((item) => (
                                    <div
                                      key={item}
                                      className="ml-5 max-w-[590px] pt-3 md:ml-0"
                                    >
                                      <h1 className="pb-2 text-base font-semibold text-[#222]">
                                        <Image
                                          src="/icons/morning.png"
                                          width={30}
                                          height={18}
                                        />
                                        <span className="pl-2"> Morning :</span>
                                      </h1>
                                      <p className="text-[14px] text-[#808080]">
                                        upon your arrival at the Lisu Lodge (9
                                        am.) you will be welcomed with a
                                        refreshing traditional drink. Then,
                                        following a cycling tour around the
                                        village (13 kilometers or 8 miles).
                                      </p>
                                    </div>
                                  ))}
                                </Disclosure.Panel>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <div className=" relative mb-4 flex flex-col items-center justify-center">
                            <div
                              className={`absolute -left-0 top-6 z-10 ${
                                open ? 'h-[96%]' : 'h-0'
                              }  w-[1px] border-[1px] border-dashed border-r-[#E71575] md:left-[10px] `}
                            >
                              {/**/}
                            </div>
                            <div className=" svg_icon absolute -left-3 top-2 z-10 w-[26px] shrink-0 text-[#E71575] md:-left-[1px]">
                              <LocationIcon />
                            </div>
                            <Disclosure.Button className="focus-purple relative w-[90%] text-left text-[16px] font-bold ">
                              <div className="mb-3 flex w-full items-center justify-between rounded bg-[#F8F8F8] p-2 px-5 pl-3 text-[#4A4A4A]">
                                <h3 className="pl-1">Day One</h3>
                                {open ? (
                                  <span className="svg_icon absolute right-3 top-3 inline-block w-[15px] rotate-180 text-transparent md:w-[18px]">
                                    <ArrowDownIcon />
                                  </span>
                                ) : (
                                  <span className="svg_icon inline-block w-[15px]  text-transparent md:w-[18px]">
                                    <ArrowDownIcon />
                                  </span>
                                )}
                              </div>
                              {!open && (
                                <div className="flex items-center gap-5 p-2 pl-3">
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Ramboda Waterfalls
                                  </button>
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Golf Course
                                  </button>
                                  <button
                                    type="button"
                                    className="rounded-3xl border border-[#808080] px-3 py-1 text-[12px] font-medium text-[#808080]"
                                  >
                                    Ramboda Waterfalls
                                  </button>
                                </div>
                              )}
                            </Disclosure.Button>

                            <AnimatePresence>
                              {open && (
                                <Disclosure.Panel
                                  static
                                  as={motion.div}
                                  initial="initial"
                                  animate="animate"
                                  exit="exit"
                                  variants={slideToggle}
                                  className=""
                                >
                                  {[1, 2, 3].map((item) => (
                                    <div
                                      key={item}
                                      className="ml-5 max-w-[590px] pt-3 md:ml-0"
                                    >
                                      <h1 className="pb-2 text-base font-semibold text-[#222]">
                                        <Image
                                          src="/icons/morning.png"
                                          width={30}
                                          height={18}
                                        />
                                        <span className="pl-2"> Morning :</span>
                                      </h1>
                                      <p className="text-[14px] text-[#808080]">
                                        upon your arrival at the Lisu Lodge (9
                                        am.) you will be welcomed with a
                                        refreshing traditional drink. Then,
                                        following a cycling tour around the
                                        village (13 kilometers or 8 miles).
                                      </p>
                                    </div>
                                  ))}
                                </Disclosure.Panel>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </Disclosure>
                    </Disclosure.Panel>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Disclosure>
        ))}
      </motion.div>
    </div>
  </div>
);
export default TripDetails;
