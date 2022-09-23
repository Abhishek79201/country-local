import Image from 'next/image';

const TouringBanner = () => (
  <div className=" max-w[1440px] purple_gradient_bg flex h-auto  items-center justify-center py-4 lg:h-[681px]">
    <div className="max-w[753px] text-center">
      <h1 className="pb-3 text-[22px] uppercase text-[#fff] ">
        during your Tour
      </h1>
      <h1 className="lg:text-[38] pb-3 text-[30px] font-bold text-[#fff]">
        Create something worth sharing
      </h1>
      <p className=" max-w-[753px] pb-6 text-base font-semibold text-[#fff]">
        Imgainative paintings, orignal songs, custom sneakers, delicious
        recipes, and more. By the end ofyour 30-day class, you’ll create
        something you are proud to share.
      </p>
      <div className=" mt-4 flex max-w-[753px] flex-wrap items-center justify-center gap-4">
        <div className=" flex w-[232px] flex-col gap-4">
          <Image src="/banner1.png" width="232px" height="140px" />
          <Image src="/banner2.png" width="232px" height="223px" />
        </div>
        <div className=" flex w-[232px] flex-col gap-4">
          <Image src="/banner3.png" width="232px" height="223px" />
          <Image src="/banner4.png" width="232px" height="140px" />
        </div>
        <div className=" flex w-[232px] flex-col gap-4">
          <Image src="/banner5.png" width="232px" height="140px" />
          <Image src="/banner6.png" width="232px" height="223px" />
        </div>
      </div>
    </div>
  </div>
);

export default TouringBanner;
