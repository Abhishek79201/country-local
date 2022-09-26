/* eslint-disable @next/next/no-img-element */

const Banner = () => {
  const bannerData = [
    'img1.png',
    'img2.png',
    'img3.png',
    'img4.png',
    'img4.png',
  ];
  return (
    <div className="flex h-[456px] w-full flex-wrap pb-11">
      <div className="gallery-layout w-full gap-2">
        {bannerData.map((item, index) => (
          <div
            className={`h-[223px] w-[345px] item${index + 1}`}
            key={item + Math.random()}
          >
            <img src={`/${item}`} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
