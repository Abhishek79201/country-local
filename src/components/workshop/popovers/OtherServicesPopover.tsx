import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/close-circle.svg';
import OnlineIcon from '../../../../public/icons/online-icon.svg';
import OfflineIcon from '../../../../public/icons/offline.svg';
import ArrowIcon from '../../../../public/icons/arrow-right.svg';

interface OtherServicesPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const OtherServicesPopover = ({
  status,
  onClose,
}: OtherServicesPopoverTypes) => {
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
            className="fixed bottom-0 z-10 w-full lg:relative lg:w-11/12 lg:max-w-[1200px]"
          >
            <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white p-5 md:rounded-xl md:shadow-xl">
              <div>
                <div
                  className="w-full rounded-xl px-4 py-4"
                  style={{ backgroundImage: 'url(/other-services-bg.jpg)' }}
                >
                  <div className="xs:flex block items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-5">
                      <Image
                        height={52}
                        width={52}
                        src="/other-service-profile.jpg"
                        alt="profile img"
                        className="h-[52px] w-[52px] rounded-full border-2 border-white"
                      />
                      <h3 className="text-white md:text-2xl">
                        Other Services by Mark
                      </h3>
                    </div>
                    <button
                      type="button"
                      className="group absolute right-7 top-7 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white lg:top-8 lg:h-[44px] lg:w-[44px]"
                      onClick={() => {
                        onClose();
                        setGlobalOverflow(false);
                      }}
                    >
                      <div className="w-5 text-[#BCBCBC] group-hover:text-[#000] lg:w-7">
                        <CloseIcon />
                      </div>
                    </button>
                  </div>

                  <div className="other-services-nav mt-4 flex max-w-[400px] items-center justify-between rounded-full bg-white p-[5px] text-xs lg:mt-6 lg:text-sm">
                    <button
                      type="button"
                      className="active relative h-[34px] w-full rounded-full px-1 text-center lg:h-[40px] lg:px-3"
                    >
                      <span className="ease relative z-[2] text-[#64748B] transition duration-300">
                        Classes
                      </span>
                    </button>
                    <button
                      type="button"
                      className="relative h-[34px] w-full rounded-full px-1 text-center text-[#64748B] lg:h-[40px] lg:px-3"
                    >
                      <span className="ease relative z-[2] text-[#64748B] transition duration-300">
                        Experiences
                      </span>
                    </button>
                    <button
                      type="button"
                      className="relative h-[34px] w-full rounded-full px-1 text-center text-[#64748B] lg:h-[40px] lg:px-3"
                    >
                      <span className="ease relative z-[2] text-[#64748B] transition duration-300">
                        Prime Packs
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex gap-x-6 border-b border-[#E6EEF8]">
                  <div className="border-b-2 border-b-[#224F9C] py-2">
                    <button
                      type="button"
                      className="flex items-center gap-1 text-[#224F9C]"
                    >
                      <div className="svg_icon w-4">
                        <OnlineIcon />
                      </div>
                      <span>Online</span>
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      className="flex items-center gap-1 text-[#64748B]"
                    >
                      <div className="svg_icon w-4">
                        <OfflineIcon />
                      </div>
                      <span>Offline</span>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white pb-6 pt-3 lg:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 235 : 'auto',
                }}
              >
                <div className="classes mt-6">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="card rounded-lg border border-[#E6EEF8] bg-white px-3 pb-5 pt-3 lg:rounded-2xl lg:px-5"
                      >
                        <h3 className="text-base font-semibold text-[#172E59] lg:text-xl">
                          Introduction Call
                        </h3>
                        <div className="mt-3 flex flex-wrap items-center lg:flex-nowrap lg:gap-3">
                          <div className="flex lg:w-full">
                            <Image
                              className="w-full rounded-lg"
                              src="/other-service.jpg"
                              width={160}
                              height={150}
                            />
                          </div>
                          <div>
                            <div className="py-3 text-xs text-[#172E59] lg:text-sm">
                              Amet minim mollit non deserunt ullamco est sit
                              aliqua dolor do amet sint. Velit officia consequat
                              duis enim velit mollit. Exercitation nostrud....
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-[#172E59] lg:text-base">
                                <span className="font-semibold">$120 </span>
                                <span>/ Person</span>
                              </p>
                              <button
                                type="button"
                                className="flex items-center gap-2 rounded-lg bg-[#224F9C] px-6 py-[9px] text-xs text-white hover:bg-pink_primary lg:text-sm"
                              >
                                <span>See Details</span>
                                <span className="svg_icon w-4 text-transparent lg:w-5">
                                  <ArrowIcon />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
export default OtherServicesPopover;
