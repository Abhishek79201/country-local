/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @next/next/no-img-element: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimeKeeper from 'react-timekeeper';
import { formatDayMonth } from '../../utilities/helpers';

import ReportPopup from '../common/popups/report-popups/ReportPopup';
import BookInfoPopups from './popovers/BookInfoPopups';
import GuestsPopover from './popovers/GuestsPopover';
import OtherServicesPopover from './popovers/OtherServicesPopover';
import PersonalizeExperiencePopover from './popovers/PersonalizeExpPopover';
import RequestToBookPopover from './popovers/RequestToBookPopover';
// import GuestsPopoverMobile from './popovers/GuestsPopoverMobile';
// import RequestToBookTimePopover from './popovers/RequestToBookTimePopover';

import 'react-datepicker/dist/react-datepicker.css';

import CalendarEditIcon from '../../../public/icons/calendar-edit.svg';
import CalendarIcon from '../../../public/icons/calendar-tick.svg';
import VoiceIcon from '../../../public/icons/call-calling.svg';
import CheckmarkIcon from '../../../public/icons/check-lg.svg';
import ArrowDownIcon from '../../../public/icons/chevron-right.svg';
import ClockIcon from '../../../public/icons/clock-1.svg';
import InstagramIcon from '../../../public/icons/instagram-2.svg';
import PeopleIcon from '../../../public/icons/people.svg';
import FlagIcon from '../../../public/icons/purple-flag.svg';
import QuestionMarkIcon from '../../../public/icons/question-mark.svg';
import TagIcon from '../../../public/icons/tag-2.svg';
import UndoIcon from '../../../public/icons/undo.svg';
import UserIcon from '../../../public/icons/user-outline.svg';
import VideoIcon from '../../../public/icons/video.svg';

const BookingCard = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Video Shortcut', icon: <VideoIcon />, active: true },
    { id: 2, title: 'DM On Instagram', icon: <InstagramIcon />, active: false },
    { id: 3, title: 'Book Appointment', icon: <CalendarIcon />, active: false },
    { id: 4, title: 'Brand Enquiry', icon: <TagIcon />, active: false },
  ]);
  const [bookMode, setBookMode] = useState([
    { id: 1, title: 'Video Call', icon: <VideoIcon />, active: false },
    { id: 2, title: 'Voice Call', icon: <VoiceIcon />, active: false },
    { id: 3, title: 'Meeting', icon: <PeopleIcon />, active: false },
  ]);

  const [bookDuration, setBookDuration] = useState([
    { id: 1, title: '15 Min', active: false },
    { id: 2, title: '30 Min', active: false },
    { id: 3, title: '45 Min', active: false },
    { id: 4, title: '60 Min', active: false },
  ]);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [openReport, setOpenReport] = useState<boolean>(false);
  const [openPersonalizedExperience, setOpenPersonalizedExperience] =
    useState<boolean>(false);
  const [openRequestToBook, setOpenRequestToBook] = useState<boolean>(false);

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [bookingTime, setBookingTime] = useState<string | null>(null);

  const [showGuests, setShowGuests] = useState<boolean>(false);

  const [bookingDate, setBookingDate] = useState<Date | null>(new Date());
  const [showMoreServices, setShowMoreServices] = useState<boolean>(false);

  const [guestsCount, setGuestsCount] = useState<{
    adults: number;
    children: number;
    infants: number;
  }>({
    adults: 2,
    children: 0,
    infants: 0,
  });

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleTabChange = (id: number) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === id) {
        return { ...tab, active: true };
      }
      return { ...tab, active: false };
    });
    setTabs(newTabs);
  };

  const handleModeChange = (id: number) => {
    const newMode = bookMode.map((mode) => {
      if (mode.id === id) {
        return { ...mode, active: true };
      }
      return { ...mode, active: false };
    });
    setBookMode(newMode);
  };

  const handleDurationChange = (id: number) => {
    const newDuration = bookDuration.map((duration) => {
      if (duration.id === id) {
        return { ...duration, active: true };
      }
      return { ...duration, active: false };
    });
    setBookDuration(newDuration);
  };

  const handleGuestCount = (type: string, count: number) => {
    if (type === 'adults') {
      setGuestsCount({ ...guestsCount, adults: count });
    } else if (type === 'children') {
      setGuestsCount({ ...guestsCount, children: count });
    } else if (type === 'infants') {
      setGuestsCount({ ...guestsCount, infants: count });
    }
  };

  return (
    <div className="booking-card-wrapper h-full transition-opacity duration-300 ease-in-out">
      <div className="booking-card mb-3 w-full rounded-[20px] border border-[#ebebeb] bg-white p-6 shadow-small">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`w-[48.2%] rounded-2xl border border-[#ebebeb] p-3 text-left ${
                tab.active
                  ? 'purple_orange_bg text-white'
                  : 'bg-[#F5F5F5] text-[#9C9C9C]'
              }`}
              onClick={() => handleTabChange(tab.id)}
            >
              <div className="svg_icon w-6">{tab.icon}</div>
              <p className="pt-1 text-[13px] font-bold">{tab.title}</p>
            </button>
          ))}
        </div>

        <div className="pt-6">
          <div className="flex items-center justify-between font-bold text-black">
            <span>Video Shortcut</span>
            <span>$500</span>
          </div>
          <p className="pt-3 pb-4 text-[13px]">
            Web application consist of 2-4 database table and also 2-4 web page.
          </p>

          <div className="flex items-center gap-x-7 text-[#70757A]">
            <div className="flex items-center text-xs">
              <div className="svg_icon mr-2 w-4">
                <ClockIcon />
              </div>
              5 Week
            </div>
            <div className="mt-[1px] flex items-center text-xs">
              <div className="svg_icon mr-2 -mt-[1px] w-3">
                <UndoIcon />
              </div>
              <div>1 Revision</div>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-[#BEBEBE]">
            <div className="svg_icon mr-2 w-4 text-[#8796A0]">
              <CheckmarkIcon />
            </div>
            4k ultra HD
          </div>
          <div className="mt-2 flex items-center text-xs text-[#EF5DA8]">
            <div className="svg_icon mr-2 w-4">
              <CheckmarkIcon />
            </div>
            30 Seconds running time
          </div>

          <div className="border-1 mt-6 mb-4 rounded-lg border-[#EF5DA8] bg-[#FDEFF6] px-4 py-[10px] text-xs font-bold text-[#EF5DA8]">
            Whats Included
          </div>

          <div className="relative rounded-lg border border-[#DFDFDF]">
            <div className="flex">
              <button
                type="button"
                onClick={() => {
                  setShowTimePicker(false);
                  setShowGuests(false);
                  setShowDatePicker(true);
                }}
                className="flex flex-1 items-center justify-between border-r border-r-[#DFDFDF] px-4 py-4 text-left text-xs"
              >
                <div className="flex items-center">
                  <span className="svg_icon mr-2 block w-5 text-transparent">
                    <CalendarEditIcon />
                  </span>
                  <span>
                    {startDate ? formatDayMonth(startDate) : 'Date'}
                    {endDate && ` - ${formatDayMonth(endDate)}`}
                  </span>
                </div>
                <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                  <ArrowDownIcon />
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowDatePicker(false);
                  setShowGuests(false);
                  setShowTimePicker(true);
                }}
                className="flex flex-1 items-center justify-between px-4 py-4 text-left text-xs"
              >
                <div className="flex items-center">
                  <span className="svg_icon mr-2 block w-5 text-transparent">
                    <ClockIcon />
                  </span>
                  <span>{bookingTime || 'Time'}</span>
                </div>
                <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                  <ArrowDownIcon />
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowDatePicker(false);
                setShowTimePicker(false);
                setShowGuests(true);
              }}
              className="flex w-full flex-1 items-center justify-between border-t border-[#DFDFDF] px-4 py-4 text-left text-xs"
            >
              <div className="flex items-center">
                <div className="svg_icon w-4">
                  <UserIcon />
                </div>
                <span className="ml-2">
                  {guestsCount.adults +
                    guestsCount.children +
                    guestsCount.infants}{' '}
                  guests
                </span>
              </div>
              <div
                className={`svg_icon flex w-4 rotate-90 transform text-[#C4C4C4] ${
                  showGuests ? 'rotate-180' : ''
                }`}
              >
                <ArrowDownIcon />
              </div>
            </button>

            {showDatePicker && (
              <div className="absolute -top-[40px] -right-[40px] z-[11] w-[660px] rounded-2xl bg-white p-10 shadow-spread">
                <div className="flex items-center justify-between">
                  <div className="">
                    <h4 className="text-lg font-semibold">Add Dates</h4>
                  </div>
                  <div className="w-[280px] rounded-lg border border-[#666] xl:w-[350px]">
                    <div className="flex overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setShowTimePicker(false);
                          setShowGuests(false);
                          setShowDatePicker(true);
                        }}
                        className={`flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs ${
                          showDatePicker &&
                          'border-b-1 rounded-bl-none border border-r-2 border-[#666]'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="svg_icon mr-2 block w-5 text-transparent">
                            <CalendarEditIcon />
                          </span>
                          <span>
                            {startDate ? formatDayMonth(startDate) : 'Date'}
                            {endDate && ` - ${formatDayMonth(endDate)}`}
                          </span>
                        </div>
                        <span className="svg_icon flex w-4 -rotate-90 transform text-[#C4C4C4]">
                          <ArrowDownIcon />
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowDatePicker(false);
                          setShowGuests(false);
                          setShowTimePicker(true);
                        }}
                        className="flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs"
                      >
                        <div className="flex items-center">
                          <span className="svg_icon mr-2 block w-5 text-transparent">
                            <ClockIcon />
                          </span>
                          <span>{bookingTime || 'Time'}</span>
                        </div>
                        <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                          <ArrowDownIcon />
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowDatePicker(false);
                        setShowTimePicker(false);
                        setShowGuests(true);
                      }}
                      className="flex h-[50px] w-full flex-1 items-center justify-between border-t border-[#666] px-4 text-left text-xs"
                    >
                      <div className="flex items-center">
                        <div className="svg_icon w-4">
                          <UserIcon />
                        </div>
                        <span className="ml-2">
                          {guestsCount.adults +
                            guestsCount.children +
                            guestsCount.infants}{' '}
                          guests
                        </span>
                      </div>
                      <div className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                        <ArrowDownIcon />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="booking_calendar mt-8 mb-4">
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
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
                    onClick={() => setShowDatePicker(false)}
                    className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {showTimePicker && (
              <div className="absolute -top-[40px] -right-[40px] z-[11] w-[430px] rounded-2xl bg-white p-10 shadow-spread">
                <div className="flex items-center justify-between">
                  <div className="" />
                  <div className="w-[280px] rounded-lg border border-[#666] xl:w-[350px]">
                    <div className="flex overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setShowGuests(false);
                          setShowTimePicker(false);
                          setShowDatePicker(true);
                        }}
                        className={`flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs ${
                          showDatePicker &&
                          'border-b-1 rounded-bl-none border border-r-2 border-[#666]'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="svg_icon mr-2 block w-5 text-transparent">
                            <CalendarEditIcon />
                          </span>
                          <span>
                            {startDate ? formatDayMonth(startDate) : 'Date'}
                            {endDate && ` - ${formatDayMonth(endDate)}`}
                          </span>
                        </div>
                        <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                          <ArrowDownIcon />
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowGuests(false);
                          setShowDatePicker(false);
                          setShowTimePicker(true);
                        }}
                        className={`flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs ${
                          showTimePicker &&
                          'border-b-1 rounded-br-none border border-l-2 border-[#666]'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="svg_icon mr-2 block w-5 text-transparent">
                            <ClockIcon />
                          </span>
                          <span>{bookingTime || 'Time'}</span>
                        </div>
                        <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                          <ArrowDownIcon />
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowDatePicker(false);
                        setShowTimePicker(false);
                        setShowGuests(true);
                      }}
                      className="flex h-[50px] w-full flex-1 items-center justify-between border-t border-[#666] px-4 text-left text-xs"
                    >
                      <div className="flex items-center">
                        <div className="svg_icon w-4">
                          <UserIcon />
                        </div>
                        <span className="ml-2">
                          {guestsCount.adults +
                            guestsCount.children +
                            guestsCount.infants}{' '}
                          guests
                        </span>
                      </div>
                      <div
                        className={`svg_icon flex w-4 rotate-90 transform text-[#C4C4C4] ${
                          showGuests ? 'rotate-180' : ''
                        }`}
                      >
                        <ArrowDownIcon />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="booking_time ml-auto mt-4 mb-4 w-[280px] text-center xl:w-[344px]">
                  <TimeKeeper
                    time={bookingTime}
                    switchToMinuteOnHourSelect
                    onChange={(updatedTime) => {
                      setBookingTime(updatedTime.formatted12);
                    }}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setShowTimePicker(false)}
                    className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {showGuests && (
              <div className="absolute -top-[40px] -right-[40px] z-[11] w-[430px] rounded-2xl bg-white p-10 shadow-spread">
                <div className="flex items-center justify-between">
                  <div />
                  <div className="w-[280px] rounded-lg border border-[#666] xl:w-[350px]">
                    <div className="flex overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setShowGuests(false);
                          setShowTimePicker(false);
                          setShowDatePicker(true);
                        }}
                        className="flex h-[50px] flex-1 items-center justify-between rounded-lg rounded-tr-none rounded-br-none border-r border-r-[#666] px-4 text-left text-xs"
                      >
                        <div className="flex items-center">
                          <span className="svg_icon mr-2 block w-5 text-transparent">
                            <CalendarEditIcon />
                          </span>
                          <span>
                            {startDate ? formatDayMonth(startDate) : 'Date'}
                            {endDate && ` - ${formatDayMonth(endDate)}`}
                          </span>
                        </div>
                        <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                          <ArrowDownIcon />
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowGuests(false);
                          setShowDatePicker(false);
                          setShowTimePicker(true);
                        }}
                        className="flex h-[50px] flex-1 items-center justify-between rounded-lg px-4 text-left text-xs"
                      >
                        <div className="flex items-center">
                          <span className="svg_icon mr-2 block w-5 text-transparent">
                            <ClockIcon />
                          </span>
                          <span>{bookingTime || 'Time'}</span>
                        </div>
                        <span className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                          <ArrowDownIcon />
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowDatePicker(false);
                        setShowTimePicker(false);
                        setShowGuests(true);
                      }}
                      className={`flex h-[50px] w-full flex-1 items-center justify-between rounded-lg border-t border-[#666] px-4 text-left text-xs ${
                        showGuests ? 'border border-t-2' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="svg_icon w-4">
                          <UserIcon />
                        </div>
                        <span className="ml-2">
                          {guestsCount.adults +
                            guestsCount.children +
                            guestsCount.infants}{' '}
                          guests
                        </span>
                      </div>
                      <div className="svg_icon flex w-4 rotate-90 transform text-[#C4C4C4]">
                        <ArrowDownIcon />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="ml-auto mt-4 mb-4 w-[280px] xl:w-[350px]">
                  <GuestsPopover
                    guests={guestsCount}
                    onChange={(type: string, count: number) => {
                      handleGuestCount(type, count);
                    }}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setShowGuests(false)}
                    className="rounded-lg bg-[#222] px-5 py-2 text-xs text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 mb-6 border-b border-b-[#DFDFDF] pb-4">
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
            </div>
          </div>

          <div className="pb-4 text-sm font-semibold">Select Mode</div>
          <div className="flex justify-between">
            {bookMode.map((mode) => (
              <button
                key={mode.id}
                type="button"
                className={`flex w-[32%] items-end rounded-lg border border-[#EF5DA8] py-2 px-2 text-[13px] ${
                  mode.active ? 'bg-[#EF5DA8] text-white' : 'text-[#EF5DA8]'
                }`}
                onClick={() => handleModeChange(mode.id)}
              >
                <div className="svg_icon mr-1 w-5 flex-shrink-0">
                  {mode.icon}
                </div>
                <span>{mode.title}</span>
              </button>
            ))}
          </div>

          <div className="pb-4 pt-5 text-sm font-semibold">Select Duration</div>
          <div className="mb-5 flex justify-between">
            {bookDuration.map((time) => (
              <button
                key={time.id}
                type="button"
                className={`w-[23.5%] items-end rounded-lg border border-[#EF5DA8] py-2 px-2 text-[13px] ${
                  time.active ? 'bg-[#EF5DA8] text-white' : 'text-[#EF5DA8]'
                }`}
                onClick={() => handleDurationChange(time.id)}
              >
                <span>{time.title}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="purple_gradient_bg_light mb-5 w-full rounded-lg py-[10px] text-sm font-bold text-white transition duration-300"
            onClick={() => setOpenRequestToBook(true)}
          >
            Check Availability
          </button>

          <div className="rounded-lg bg-[#F3F3F3] p-3 text-xs text-[#C0C0C0]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit
          </div>

          <div className="mt-5 text-center">
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
              date={bookingDate}
              time={bookingTime}
              onDateChange={(date: Date | null) => setBookingDate(date)}
              onTimeChange={(time: string) => setBookingTime(time)}
              guests={guestsCount}
              onGuestsChange={(type: string, count: number) => {
                handleGuestCount(type, count);
              }}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          setShowMoreServices(true);
        }}
        className="relative z-0 w-full rounded-lg border border-[#E7E7E7] bg-white p-2"
      >
        <div className="w-full rounded-lg bg-[#374C74] py-3 text-center text-sm font-semibold text-[#fff] hover:bg-[#1F3660]">
          View one-off sessions
        </div>
      </button>

      <RequestToBookPopover
        status={openRequestToBook}
        onClose={() => setOpenRequestToBook(false)}
        date={bookingDate}
        time={bookingTime}
        onDateChange={(date: Date | null) => setBookingDate(date)}
        onTimeChange={(time: string) => setBookingTime(time)}
        guests={guestsCount}
        onGuestsChange={(type: string, count: number) => {
          handleGuestCount(type, count);
        }}
      />

      <BookInfoPopups status={openPopup} onClose={() => setOpenPopup(false)} />

      <OtherServicesPopover
        status={showMoreServices}
        onClose={() => {
          setShowMoreServices(false);
        }}
      />
    </div>
  );
};
export default BookingCard;
