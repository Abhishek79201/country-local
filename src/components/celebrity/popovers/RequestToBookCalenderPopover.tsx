import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import DatePicker from 'react-datepicker';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseIcon from '../../../../public/icons/xmark.svg';

interface RequestToBookCalenderPopoverTypes {
  status: boolean;
  onClose: () => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateChange: (dates: [Date: Date | null, Date: Date | null]) => void;
}

const RequestToBookCalenderPopover = ({
  status,
  onClose,
  startDate,
  endDate,
  onDateChange,
}: RequestToBookCalenderPopoverTypes) => {
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
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[640px]"
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
                  Choose a date
                </h4>
              </div>

              <div
                className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height: width < 1064 ? window.innerHeight - 60 : 'auto',
                }}
              >
                <div>
                  <div className="booking_calendar">
                    <DatePicker
                      selected={startDate}
                      onChange={(dates: [Date, Date]) => {
                        onDateChange(dates);
                      }}
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      monthsShown={2}
                      selectsRange
                      inline
                      isClearable
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        // setStartDate(null);
                        // setEndDate(null);
                        onDateChange([null, null]);
                      }}
                      className="text-xs underline"
                    >
                      Clear dates
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                    >
                      Close
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
export default RequestToBookCalenderPopover;
