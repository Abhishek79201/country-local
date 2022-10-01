/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import LightBox from './PopUp/LighBox';
import PopUpScreen from './PopUp/PopUpScreen';

const Banner = () => {
  const [lightImg, setLightImg] = useState('');
  const [totalImg, setTotalImg] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePopUp, setActivePopUp] = useState(false);

  const bannerData = [
    { id: 1, img: 'img1.png' },
    { id: 2, img: 'img2.png' },
    { id: 3, img: 'img3.png' },
    { id: 4, img: 'img5.png' },
    { id: 5, img: 'img4.png' },
  ];

  const handleLightBox = (data: { img: string }, index: number) => {
    setLightImg(data.img);
    setCurrentIndex(index);
    setTotalImg(bannerData.length);
    document.querySelector('body')?.classList.add('active');
  };

  const handleRight = () => {
    const totalLength = bannerData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = bannerData[0].img;
      setLightImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = bannerData.filter((item) => {
      return bannerData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setLightImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleLeft = () => {
    const totalLength = bannerData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = bannerData[totalLength - 1].img;
      setLightImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = bannerData.filter((item) => {
      return bannerData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setLightImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex h-[456px] w-full flex-wrap pb-11">
      <div className="gallery-layout w-full gap-2">
        {bannerData.map((data, index) => (
          <div
            className={`h-[223px] w-[345px] item${index + 1}`}
            key={data.id + Math.random()}
          >
            <img
              src={`/${data.img}`}
              alt="img"
              onClick={() => {
                setActivePopUp(true);
                handleLightBox(data, index);
              }}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      {activePopUp && (
        <PopUpScreen activePopUp={setActivePopUp}>
          <LightBox
            img={lightImg}
            totalImgNum={totalImg}
            currentIndex={currentIndex}
            handleRight={handleRight}
            handleLeft={handleLeft}
          />
          <div className="absolute bottom-5 left-5 z-[1060] flex gap-3">
            {bannerData.map((items: { img: string }, index: any) => (
              <div key={Math.random() * 10}>
                <img
                  src={items.img}
                  alt=""
                  width={80}
                  height={50}
                  onClick={() => handleLightBox(items, index)}
                  className={
                    items.img === lightImg
                      ? ' cursor-pointer border border-[#e25454]'
                      : 'cursor-pointer'
                  }
                />
              </div>
            ))}
          </div>
        </PopUpScreen>
      )}
    </div>
  );
};

export default Banner;
