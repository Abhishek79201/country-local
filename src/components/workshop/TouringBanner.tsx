/* eslint @next/next/no-img-element: "off" */
import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OverflowContext } from '../../context/overflowContext';
import useViewport from '../../hooks/useViewport';

import 'swiper/css';

import CloseIcon from '../../../public/icons/xmark.svg';

const TouringBanner = () => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const showLargeImage = (url: string) => {
    setImageUrl(url);
    setIsOpen(true);
  };

  return (
    <div className="purple_gradient_bg relative z-[1] mb-6 flex h-auto w-full items-center justify-center py-8 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-[753px] text-center">
          <p className="mb-0 text-base uppercase text-[#fff] md:pb-3 md:text-[22px]">
            during your Tour
          </p>
          <p className="pb-3 text-[22px] font-bold text-[#fff] md:text-[38px]">
            Create something worth sharing
          </p>
          <p className="pb-6 text-sm font-semibold text-[#fff] md:text-base">
            Imgainative paintings, orignal songs, custom sneakers, delicious
            recipes, and more. By the end ofyour 30-day class, you’ll create
            something you are proud to share.
          </p>
          {width > 1063 ? (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <div className="flex w-[232px] flex-col gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage('plan-fullsize-1.jpg');
                  }}
                >
                  <Image src="/banner1.png" width="232px" height="140px" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage('plan-fullsize-2.jpg');
                  }}
                >
                  <Image src="/banner2.png" width="232px" height="223px" />
                </button>
              </div>
              <div className="flex w-[232px] flex-col gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage('plan-fullsize-3.jpg');
                  }}
                >
                  <Image src="/banner3.png" width="232px" height="223px" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage('plan-fullsize-4.jpg');
                  }}
                >
                  <Image src="/banner4.png" width="232px" height="140px" />
                </button>
              </div>
              <div className="flex w-[232px] flex-col gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage('plan-fullsize-5.jpg');
                  }}
                >
                  <Image src="/banner5.png" width="232px" height="140px" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    showLargeImage('plan-fullsize-1.jpg');
                  }}
                >
                  <Image src="/banner6.png" width="232px" height="223px" />
                </button>
              </div>
            </div>
          ) : (
            <div className="-mr-5 -ml-[10px] md:ml-0 md:mr-0">
              <Swiper
                slidesPerView="auto"
                spaceBetween={0}
                freeMode
                modules={[FreeMode]}
                className="flex flex-wrap !pr-5 md:!pr-0"
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <SwiperSlide
                    key={item}
                    className="!w-[68%] md:!w-1/3 lg:!w-1/5"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        showLargeImage(`plan-fullsize-${item}.jpg`);
                      }}
                    >
                      <Image
                        src={`/banner${item}.png`}
                        width="232px"
                        height="223px"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
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
            open={isOpen}
            onClose={() => setIsOpen(false)}
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
                      setIsOpen(false);
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
                  <img src={`/${imageUrl}`} alt={`/${imageUrl}`} />
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TouringBanner;
