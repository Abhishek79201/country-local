/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @next/next/no-img-element: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import Sticky from 'react-stickynode';
import { formatDate } from '../../utilities/helpers';

import BookInfoPopups from './popovers/BookInfoPopups';
import ReportPopup from '../common/popups/report-popups/ReportPopup';
import GuestsPopover from './popovers/GuestsPopover';
import OtherServicesPopover from './popovers/OtherServicesPopover';
import PriceBreakdownPopover from './popovers/PriceBreakdownPopover';
import PersonalizeExperiencePopover from './popovers/PersonalizeExpPopover';
import RequestToBookPopover from './popovers/RequestToBookPopover';

import 'react-datepicker/dist/react-datepicker.css';

import StarIcon from '../../../public/icons/star.svg';
import QuestionMarkIcon from '../../../public/icons/question-mark.svg';
import FlagIcon from '../../../public/icons/purple-flag.svg';
import UserIcon from '../../../public/icons/user-outline.svg';
import ChevronIcon from '../../../public/icons/chevron-down.svg';

const BookingCard = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [openReport, setOpenReport] = useState<boolean>(false);
  const [openPriceBreakdown, setOpenPriceBreakdown] = useState<boolean>(false);
  const [openPersonalizedExperience, setOpenPersonalizedExperience] =
    useState<boolean>(false);
  const [openRequestToBook, setOpenRequestToBook] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showMoreServices, setShowMoreServices] = useState<boolean>(false);
  const [showGuests, setShowGuests] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (endDate) {
      setShowDatePicker(false);
    }
  }, [endDate]);

  return (
    <Sticky top={30} bottomBoundary=".sticky_bottom_container">
      <div className="h-full">
        <div className="booking-card mb-5 w-full rounded-[20px] bg-white pb-8 shadow-spread ">
          <div className="relative overflow-hidden rounded-tl-[20px] rounded-tr-[20px] pb-[52%]">
            <img
              src="/book-card.jpg"
              alt="book-card-bg"
              className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform"
            />
            <div className="absolute left-4 top-4 rounded-full bg-pink_primary px-4 py-[6px] text-xs text-white">
              Instantly Confirmed
            </div>
          </div>
          <div className="px-5 xl:px-7">
            <div className="relative mx-auto -mt-[42px] h-[84px] w-[84px] overflow-hidden rounded-full border-[3px] border-white">
              <Image src="/book-card-author.jpg" alt="avatar" layout="fill" />
            </div>
            <h3 className="mt-4 mb-2 text-center text-xl font-bold leading-snug xl:mt-6 xl:mb-3 xl:text-2xl">
              The Best of Berling in a Convertible Car
            </h3>
            <div className="flex items-center justify-center text-center text-lg xl:text-xl">
              <span className="mr-3">Hosted by</span>
              <Image src="/miha.png" width={51} height={22} />
            </div>
            <div className="mt-3 mb-5 flex items-center justify-center text-center text-xs xl:text-sm">
              <div className="font-semibold">
                From $45 <span className="line-through">$567</span> / night
              </div>
              <div className="ml-3 flex items-center">
                <div className="svg_icon mr-1 w-[13px] shrink-0">
                  <StarIcon />
                </div>
                <span className="mr-2">4.6</span>
                <span className="underline">(25)reviews</span>
              </div>
            </div>
            <div className="relative rounded-lg border border-[#808080]">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="flex-1 border-r border-r-[#808080] px-4 py-4 text-left text-xs"
                >
                  <span className="block font-semibold">CHECK-IN</span>
                  <span className="">{formatDate(startDate)}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="flex-1 px-4 py-4 text-left text-xs"
                >
                  <span className="block font-semibold">CHECK-OUT</span>
                  <span className="">{formatDate(endDate)}</span>
                </button>

                {showDatePicker && (
                  <div className="absolute -top-[40px] -right-[40px] z-[11] w-[660px] rounded-2xl bg-white p-10 shadow-spread">
                    <div className="flex justify-between">
                      <div className="w-4/12">
                        <h4 className="text-lg font-semibold">32 nights</h4>
                        <p className="text-sm text-[#808080]">
                          {formatDate(startDate)} - {formatDate(endDate)}
                        </p>
                      </div>
                      <div className="w-[280px] xl:w-[344px]">
                        <div className="flex rounded-lg border-2 border-[#808080]">
                          <button
                            type="button"
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className="flex-1 border-r-2 border-r-[#808080] px-4 py-4 text-left text-xs"
                          >
                            <span className="block font-semibold">
                              CHECK-IN
                            </span>
                            <span className="">{formatDate(startDate)}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className="flex-1 px-4 py-4 text-left text-xs"
                          >
                            <span className="block font-semibold">
                              CHECK-OUT
                            </span>
                            <span className="">{formatDate(endDate)}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="booking_calendar mt-8 mb-4">
                      <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        monthsShown={2}
                        selectsRange
                        inline
                        isClearable
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          setStartDate(null);
                          setEndDate(null);
                        }}
                        className="text-xs underline"
                      >
                        Clear dates
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`relative flex border-t border-[#808080] px-4 py-4 ${
                  showGuests && 'rounded-lg border !border-t-2'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setShowGuests(!showGuests)}
                  className="flex flex-1 items-center justify-between text-left text-xs"
                >
                  <div>
                    <span className="font-semibold">GUESTS</span>
                    <div className="mt-1 flex items-center">
                      <div className="svg_icon w-4">
                        <UserIcon />
                      </div>
                      <span className="ml-2">2 guests</span>
                    </div>
                  </div>
                  <div
                    className={`svg_icon w-4 transform text-transparent ${
                      showGuests ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronIcon />
                  </div>
                </button>
                {showGuests && <GuestsPopover />}
              </div>
            </div>
            <div className="mt-5 mb-7">
              <div className="flex items-center">
                <div className="text-sm font-semibold">
                  Book for Private Group
                </div>
                <button
                  type="button"
                  className="svg_icon ml-2 w-[14px] rounded-full bg-black text-white"
                  onClick={() => setOpenPopup(true)}
                >
                  <QuestionMarkIcon />
                </button>
                <label className="switch ml-auto">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <BookInfoPopups
                  status={openPopup}
                  onClose={() => setOpenPopup(false)}
                />
              </div>
            </div>
            <button
              type="button"
              className="mb-3 w-full rounded-xl bg-pink_primary py-3 text-base font-bold text-white transition duration-300 hover:bg-[#A96AD8]"
              onClick={() => setOpenRequestToBook(true)}
            >
              Request To Book
            </button>
            <RequestToBookPopover
              status={openRequestToBook}
              onClose={() => setOpenRequestToBook(false)}
            />
            <p className="text-center text-xs">You won’t be charged yet</p>
            <div className="border-b border-b-[#DBDBDB] pt-6 pb-6 text-[#4A4A4A]">
              <div className="mb-3 flex justify-between">
                <div className="underline">$315 x nights</div>
                <div>$2,203</div>
              </div>
              <div className="flex justify-between">
                <div className="underline">
                  Service fee{' '}
                  <button
                    type="button"
                    className="svg_icon ml-2 w-[14px] rounded-full"
                    onClick={() => setOpenPriceBreakdown(true)}
                  >
                    <QuestionMarkIcon />
                  </button>
                  <PriceBreakdownPopover
                    status={openPriceBreakdown}
                    onClose={() => setOpenPriceBreakdown(false)}
                  />
                </div>
                <div>$203</div>
              </div>
            </div>
            <div className="flex justify-between pt-5 font-semibold text-[#222222]">
              <div>Total before taxes</div>
              <div>$2,203</div>
            </div>

            <div className="mt-7 text-center">
              <button
                type="button"
                className="mx-auto flex items-center text-xs font-semibold text-[#222222]"
                onClick={() => setOpenReport(true)}
              >
                <div className="svg_icon mr-2 w-[12px]">
                  <FlagIcon />
                </div>
                <div className="underline">Report this listings</div>
              </button>
              <ReportPopup
                status={openReport}
                onClose={() => {
                  setOpenReport(false);
                }}
              />
              <button
                type="button"
                onClick={() => setOpenPersonalizedExperience(true)}
                className="mt-3 rounded-full border-2 border-pink_primary px-5 py-[6px] text-xs text-pink_primary"
              >
                Contact me to costumize this to your needs
              </button>
              <PersonalizeExperiencePopover
                status={openPersonalizedExperience}
                onClose={() => setOpenPersonalizedExperience(false)}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setShowMoreServices(true);
          }}
          className="relative z-0 w-full pb-20"
        >
          <div className="z-50 w-full rounded-xl border-4 border-[#fff] bg-[#002390] py-3 text-center text-[#fff] ">
            View All My Service
          </div>
          <div className="absolute left-0 top-11 -z-10 w-full rounded-xl border-4 border-[#fff] bg-[#23B4ED] py-3 text-center text-[#fff] ">
            Total 10 Services
          </div>
        </button>
        <OtherServicesPopover
          status={showMoreServices}
          onClose={() => {
            setShowMoreServices(false);
          }}
        />
      </div>
    </Sticky>
  );
};
export default BookingCard;
