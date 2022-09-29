/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Arrow from '../../../../public/icons/arrow-left.svg';

interface PopUpImg {
  totalImgNum: any;
  currentIndex: any;
  img: any;
  handleRight: () => void;
  handleLeft: () => void;
}

const LightBox = ({
  img,
  totalImgNum,
  currentIndex,
  handleRight,
  handleLeft,
}: PopUpImg) => {
  const lightImg = img;

  return (
    <div className="box_body">
      <div className="box_content">
        <div className="left_arrow arrow">
          {/* <img src={leftArrow} alt="" onClick={handleLeft} /> */}
          <div
            className=" svg_icon w-9 rotate-180 cursor-pointer bg-[#fff] p-3 "
            onClick={handleLeft}
          >
            <Arrow />
          </div>
        </div>
        <div className="img_content">
          <div className="img_div">
            <img src={lightImg} alt="imgs" className="object-contain" />
            <p className="length" style={{ color: 'white' }}>
              {currentIndex + 1} {''}
              of {''}
              {totalImgNum}
            </p>
          </div>
        </div>

        <div className="right_arrow arrow">
          <div
            className="svg_icon w-9 cursor-pointer bg-[#fff] p-3 "
            onClick={handleRight}
          >
            <Arrow />
          </div>
        </div>
      </div>
      <div className="responsive_arrow">
        <div className="left_arrow res_arrow">
          {/* <img src={leftArrow} alt="" onClick={handelLeft} />
           */}
          <div
            className=" svg_icon w-9 rotate-180 cursor-pointer bg-[#fff] p-3 "
            onClick={handleLeft}
          >
            <Arrow />
          </div>
        </div>
        <div className="right_arrow res_arrow">
          {/* <img src={rightArrow} alt="" onClick={handleRight} /> */}{' '}
          <div
            className="svg_icon w-9 cursor-pointer bg-[#fff] p-3 "
            onClick={handleRight}
          >
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
