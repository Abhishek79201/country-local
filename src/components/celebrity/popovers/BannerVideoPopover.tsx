/* eslint react/jsx-one-expression-per-line: "off" */
import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import ReactPlayer from 'react-player';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';
import CloseIcon from '../../../../public/icons/xmark.svg';

interface BannerVideoPopoverTypes {
  status: boolean;
  onClose: () => void;
}

const BannerVideoPopover = ({ status, onClose }: BannerVideoPopoverTypes) => {
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
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[1000px]"
          >
            <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
              <div
                className="custom_scrollbar overflow-y-auto bg-white p-6 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 60 : 'auto',
                }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <ReactPlayer
                    url="https://drive.google.com/uc?id=1ZMYDAQUIRuISS5ckSOVUtGE6dV5RRfW2"
                    width="100%"
                    height="100%"
                    controls
                    muted
                    playing
                  />
                </div>
              </div>
              <button
                type="button"
                className="group absolute right-0 top-0 p-2"
                onClick={() => {
                  onClose();
                  setGlobalOverflow(false);
                }}
              >
                <div className="svg_icon w-4 text-[#000]">
                  <CloseIcon />
                </div>
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default BannerVideoPopover;
