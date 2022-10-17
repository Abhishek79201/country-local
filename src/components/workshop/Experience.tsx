import React from 'react';
import Checkmark from '../../../public/icons/checked-purple.svg';
import UnderLine from '../common/UnderLine';

const Experience = () => (
  <div>
    <h3 className="pb-6 text-lg font-bold text-black md:text-[20px]">
      6 Reason to Book
      <span className="purple_gradient_text_deep "> this Experience</span>
    </h3>
    <div className="flex w-full flex-wrap justify-between gap-y-5 md:pr-7">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="flex w-full items-center rounded-[5px] bg-[#fff] py-2 pl-2 pr-6 md:w-[45%]"
          style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
        >
          <div className="svg_icon w-6 text-[#E71575]">
            <Checkmark />
          </div>
          <div className="ml-2 text-sm font-semibold">
            Explore Berlin in a conviertible car
          </div>
        </div>
      ))}
    </div>
    <UnderLine />
  </div>
);

export default Experience;
