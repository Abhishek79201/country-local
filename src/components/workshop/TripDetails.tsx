/* eslint-disable @typescript-eslint/no-shadow */
/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInUp, slideToggle } from '../../utilities/animations';

import ArrowDownIcon from '../../../public/icons/chevron-down.svg';
import CloseIcon from '../../../public/icons/xmark.svg';
import LocationIcon from '../../../public/icons/location.svg';

const TripDetails = () => (
  <div className="relative">
    <div className="pb-6 text-center md:pb-12">
      <p className="text-sm uppercase text-[#E71575] md:text-lg">
        WE’RE HERE To create wonderful memories
      </p>
      <h2 className="pb-3 text-[24px] font-bold leading-tight md:text-[42px]">
        Here Are The Trip Details
      </h2>
    </div>

    <div className="mx-auto pb-8 lg:max-w-[820px]">
      {['Program', 'FAQs'].map((item) => (
        <Disclosure as={motion.div} variants={fadeInUp} key={item}>
          {({ open }) => (
            <div className="mb-4 rounded-xl px-2 pt-2 pb-2 shadow-spread md:px-4">
              <Disclosure.Button className="focus-purple relative flex w-full gap-3 px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-[20px]">
                <span className="flex">
                  <Image
                    src="/icons/purple-calendar.png"
                    width={22}
                    height={22}
                  />
                </span>
                {item}
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
                    className="mt-4 px-3"
                  >
                    <Disclosure>
                      {({ open }) => (
                        <div className="relative mb-4 flex flex-col items-center justify-center">
                          <div className="absolute -left-0 top-6 z-10 h-[100%] w-[1px] border-[1px] border-dashed border-r-[#E71575] md:left-[10px] " />
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
                              <div className="flex flex-wrap items-center gap-2 p-2 pl-3 md:flex-nowrap md:gap-5">
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
                                className="md:ml-8"
                              >
                                {['morning', 'noon', 'night'].map((item) => (
                                  <div
                                    key={item}
                                    className="ml-5 max-w-[590px] pt-3 md:ml-0"
                                  >
                                    <div className="flex items-center pb-2 text-base font-semibold text-[#222]">
                                      <Image
                                        src={`/icons/${item}.png`}
                                        width={24}
                                        height={24}
                                      />
                                      <span className="pl-2 capitalize">
                                        {' '}
                                        {item} :
                                      </span>
                                    </div>
                                    <p className="text-[14px] text-[#808080]">
                                      upon your arrival at the Lisu Lodge (9
                                      am.) you will be welcomed with a
                                      refreshing traditional drink. Then,
                                      following a cycling tour around the
                                      village (13 kilometers or 8 miles).
                                    </p>
                                    <div className="mt-3 flex flex-wrap items-center gap-x-3">
                                      <div className="flex overflow-hidden rounded-lg">
                                        <Image
                                          src="/stay-banner-3.jpg"
                                          width={200}
                                          height={100}
                                        />
                                      </div>
                                      <div className="flex overflow-hidden rounded-lg">
                                        <Image
                                          src="/stay-banner-4.jpg"
                                          width={200}
                                          height={100}
                                        />
                                      </div>
                                    </div>
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
                          <div className="absolute -left-0 top-6 z-10 h-[100%] w-[1px] border-[1px] border-dashed border-r-[#E71575] md:left-[10px] " />
                          <div className=" svg_icon absolute -left-3 top-2 z-10 w-[26px] shrink-0 text-[#E71575] md:-left-[1px]">
                            <LocationIcon />
                          </div>
                          <Disclosure.Button className="focus-purple relative w-[90%] text-left text-[16px] font-bold ">
                            <div className="mb-3 flex w-full items-center justify-between rounded bg-[#F8F8F8] p-2 px-5 pl-3 text-[#4A4A4A]">
                              <h3 className="pl-1">Day Two</h3>
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
                              <div className="flex flex-wrap items-center gap-2 p-2 pl-3 md:flex-nowrap md:gap-5">
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
                                className="md:ml-8"
                              >
                                {['morning', 'noon', 'night'].map((item) => (
                                  <div
                                    key={item}
                                    className="ml-5 max-w-[590px] pt-3 md:ml-0"
                                  >
                                    <div className="flex items-center pb-2 text-base font-semibold text-[#222]">
                                      <Image
                                        src={`/icons/${item}.png`}
                                        width={24}
                                        height={24}
                                      />
                                      <span className="pl-2 capitalize">
                                        {' '}
                                        {item} :
                                      </span>
                                    </div>
                                    <p className="text-[14px] text-[#808080]">
                                      upon your arrival at the Lisu Lodge (9
                                      am.) you will be welcomed with a
                                      refreshing traditional drink. Then,
                                      following a cycling tour around the
                                      village (13 kilometers or 8 miles).
                                    </p>
                                    <div className="mt-3 flex flex-wrap items-center gap-x-3">
                                      <div className="flex overflow-hidden rounded-lg">
                                        <Image
                                          src="/stay-banner-3.jpg"
                                          width={200}
                                          height={100}
                                        />
                                      </div>
                                      <div className="flex overflow-hidden rounded-lg">
                                        <Image
                                          src="/stay-banner-4.jpg"
                                          width={200}
                                          height={100}
                                        />
                                      </div>
                                    </div>
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
                              open ? 'h-[100%]' : 'h-0'
                            }  w-[1px] border-[1px] border-dashed border-r-[#E71575] md:left-[10px] `}
                          >
                            {/**/}
                          </div>
                          <div className=" svg_icon absolute -left-3 top-2 z-10 w-[26px] shrink-0 text-[#E71575] md:-left-[1px]">
                            <LocationIcon />
                          </div>
                          <Disclosure.Button className="focus-purple relative w-[90%] text-left text-[16px] font-bold ">
                            <div className="mb-3 flex w-full items-center justify-between rounded bg-[#F8F8F8] p-2 px-5 pl-3 text-[#4A4A4A]">
                              <h3 className="pl-1">Day Three</h3>
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
                              <div className="flex flex-wrap items-center gap-2 p-2 pl-3 md:flex-nowrap md:gap-5">
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
                                className="md:ml-8"
                              >
                                {['morning', 'noon', 'night'].map((item) => (
                                  <div
                                    key={item}
                                    className="ml-5 max-w-[590px] pt-3 md:ml-0"
                                  >
                                    <div className="flex items-center pb-2 text-base font-semibold text-[#222]">
                                      <Image
                                        src={`/icons/${item}.png`}
                                        width={24}
                                        height={24}
                                      />
                                      <span className="pl-2 capitalize">
                                        {' '}
                                        {item} :
                                      </span>
                                    </div>
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
    </div>
  </div>
);
export default TripDetails;
