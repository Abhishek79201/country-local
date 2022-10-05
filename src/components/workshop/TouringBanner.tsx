import Image from 'next/image';

const TouringBanner = () => (
  <div className=" purple_gradient_bg_1 mb-6 flex h-auto w-full items-center justify-center py-8 md:py-16">
    <div className="container">
      <div className="mx-auto max-w-[753px] text-center">
        <h1 className="mb-0 text-base uppercase text-[#fff] md:pb-3 md:text-[22px]">
          during your Tour
        </h1>
        <p className="pb-3 text-[22px] font-bold text-[#fff] md:text-[38px]">
          Create something worth sharing
        </p>
        <p className="pb-6 text-sm font-semibold text-[#fff] md:text-base">
          Imgainative paintings, orignal songs, custom sneakers, delicious
          recipes, and more. By the end ofyour 30-day class, you’ll create
          something you are proud to share.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <div className="flex w-[232px] flex-col gap-4">
            <Image src="/banner1.png" width="232px" height="140px" />
            <Image src="/banner2.png" width="232px" height="223px" />
          </div>
          <div className="flex w-[232px] flex-col gap-4">
            <Image src="/banner3.png" width="232px" height="223px" />
            <Image src="/banner4.png" width="232px" height="140px" />
          </div>
          <div className="flex w-[232px] flex-col gap-4">
            <Image src="/banner5.png" width="232px" height="140px" />
            <Image src="/banner6.png" width="232px" height="223px" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TouringBanner;
