/* eslint @next/next/no-img-element: "off" */
import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { fadeInUp, fadeInLeft } from '../../utilities/animations';
import { MobileBookingContext } from '../../context/mobileBookingContext';
import { OverflowContext } from '../../context/overflowContext';
import useViewport from '../../hooks/useViewport';

import ContactMePopover from './popovers/ContactMePopover';
import UnderLine from '../common/UnderLine';

import FillLocate from '../../../public/icons/fillLocation.svg';
import TickMarkIcon from '../../../public/icons/check-lg.svg';
import CloseIcon from '../../../public/icons/xmark.svg';

const Plan = () => {
  const { width } = useViewport();
  const { setShowMobileBooking } = useContext(MobileBookingContext);
  const { setGlobalOverflow } = useContext(OverflowContext);
  const scrollToBookNow = () => {
    const section = document.querySelector('.sticky_bottom_container');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const [showContactMe, setShowContactMe] = useState(false);
  const [imgData, setImageData] = useState([
    {
      id: 1,
      thumbnail: 'group-1.png',
      fullSize: 'plan-fullsize-1.jpg',
      isOpen: false,
    },
    {
      id: 2,
      thumbnail: 'group-2.png',
      fullSize: 'plan-fullsize-2.jpg',
      isOpen: false,
    },
    {
      id: 3,
      thumbnail: 'group-3.png',
      fullSize: 'plan-fullsize-3.jpg',
      isOpen: false,
    },
    {
      id: 4,
      thumbnail: 'group-4.png',
      fullSize: 'plan-fullsize-4.jpg',
      isOpen: false,
    },
    {
      id: 5,
      thumbnail: 'group-5.png',
      fullSize: 'plan-fullsize-5.jpg',
      isOpen: false,
    },
  ]);

  const showLargeImage = (id: number) => {
    const newData = imgData.map((data) => {
      if (data.id === id) {
        return { ...data, isOpen: true };
      }
      return data;
    });

    setImageData(newData);
  };

  const handleClosePopup = (id: number) => {
    const newData = imgData.map((data) => {
      if (data.id === id) {
        return { ...data, isOpen: false };
      }
      return data;
    });

    setImageData(newData);
  };

  return (
    <div>
      <h3 className="mb-4 text-[22px] font-bold text-[#222]">
        This is the plan
      </h3>

      <p className="mb-8 text-base text-[#808080] md:text-[18px]">
        Check out the plan below to see what you will get up with your local
        host. Feel free to personalize this offer with the host of your choice.
      </p>

      <div className="relative h-5 w-12">
        <div className="svg_icon absolute top-0 -left-3 z-10 w-6 text-[#E71575] ">
          <FillLocate />
        </div>
      </div>

      <div className="relative z-0 mb-0 h-full pt-10 lg:pt-[70px]">
        <div className="absolute -left-[1px] -top-2 -z-10 h-full w-[1px] border-[1px] border-dashed border-r-[#E71575]" />
        {imgData.map((item) => (
          <div
            className="relative ml-6 flex flex-wrap justify-between gap-5 pt-3 pb-8"
            key={item.id}
          >
            <div className=" max-w-[373px]">
              <span className=" absolute -left-8 -top-5 z-10 text-[56px] text-[#E71575]">
                •
              </span>

              <p className="pb-2 text-[18px] font-bold text-[#000]">
                This is the plan
              </p>
              <p className="text-[14px] text-[#000]">
                Tortor pellentesque nec sit nulla volutpat curabitur mattis
                fusce condimentum. Nulla orci congue praesent nullam vitae nibh.
                Sed sit sed eu lectus mi amet egestas massa.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                showLargeImage(item.id);
              }}
            >
              <Image
                src={`/${item.thumbnail}`}
                width={289}
                height={99}
                className="rounded"
              />
            </button>

            <AnimatePresence>
              {item.isOpen && (
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
                  open={item.isOpen}
                  onClose={() => handleClosePopup(item.id)}
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
                      initial: {
                        opacity: 0,
                        y: 100,
                      },
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
                    className="fixed bottom-[38%] z-10 w-full md:bottom-0 lg:relative lg:w-11/12 lg:max-w-[1200px]"
                  >
                    <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          className="group absolute right-3 top-3 bg-white bg-opacity-70 p-3"
                          onClick={() => {
                            handleClosePopup(item.id);
                            setGlobalOverflow(false);
                          }}
                        >
                          <div className="svg_icon w-3 text-black">
                            <CloseIcon />
                          </div>
                        </button>
                      </div>

                      <div
                        className="custom_scrollbar overflow-y-auto bg-white md:p-3 lg:max-h-[90vh]"
                        // style={{
                        //   height:
                        //     width < 1064 ? window.innerHeight - 70 : 'auto',
                        // }}
                      >
                        <img
                          src={`/${item.fullSize}`}
                          alt={`/${item.fullSize}`}
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Dialog>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="relative ml-6">
          <span className=" absolute -left-8 -top-8 z-10 text-[56px] text-[#E71575]">
            •
          </span>
          <p className="text-[18px] font-bold text-[#222]">
            Excited?
            <button
              type="button"
              className="ml-1 text-[#E71575]"
              onClick={
                width < 1064
                  ? () => setShowMobileBooking(true)
                  : () => scrollToBookNow()
              }
            >
              Book Now
            </button>
          </p>
        </div>
      </div>
      <UnderLine />
      <div>
        <motion.div className="w-full" variants={fadeInLeft}>
          <p className="mb-4 text-[22px] font-bold text-[#222] ">
            I can personlize this tour for you
          </p>
          <motion.div
            variants={fadeInLeft}
            className="flex w-full flex-wrap items-start gap-4 rounded lg:min-h-[230px]  lg:flex-nowrap"
          >
            <div className="banner w-full p-0 lg:w-[40%] ">
              <Image
                src="/girl.png"
                width="362px"
                height="270px"
                alt="staybanner"
              />
            </div>
            <div className="relative w-full lg:w-[60%]">
              {[1, 2, 3].map((item) => (
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-3 pb-[10px] "
                  key={item}
                >
                  <div className="svg_icon w-6 text-[#E71575] md:w-8">
                    <TickMarkIcon />
                  </div>
                  <p className="text-sm text-[#808080]">
                    Vehicula faucibus ultrices gravida tincidunt dolor. Ut
                    ultricies nunc congue id eget malesuada.
                  </p>
                </motion.div>
              ))}
              <button
                type="button"
                onClick={() => setShowContactMe(true)}
                className="purple_gradient_bg ml-2 mt-3 flex h-10 w-[182px] items-center justify-center rounded-lg text-base font-bold text-[#fff] md:h-14 "
              >
                Contact me
              </button>
              <ContactMePopover
                status={showContactMe}
                onClose={() => setShowContactMe(false)}
              />
            </div>
          </motion.div>
          <UnderLine />
        </motion.div>
      </div>
    </div>
  );
};

export default Plan;
