const DarkConcrete = () => (
  <div className="bg-white font-bold">
    <div className="h-[800px] w-full items-center rounded-[33px] bg-[url('../../../public/BG.jpg')] bg-cover bg-no-repeat md:h-[654px]">
      <div className="grid h-full grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="flex flex-col px-[10px] pt-[133px] md:pl-[60px] md:pt-[111px]">
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="mb-[18px] rounded-[7px] bg-[#E71575] px-4 py-1 font-medium leading-[24px] text-[white]"
            >
              LIVE
            </button>
          </div>
          <h3 className="mb-[12px] text-center text-[24px] font-bold leading-[36px] text-[white] md:mb-[42px] md:text-left md:text-[42px] md:leading-[60px]">
            Explore the world from the comfort of your couch!
          </h3>
          <div className="flex justify-center md:justify-start">
            <p className="mb-[24px] max-w-[253px] text-center text-[14px] font-normal leading-[21px] text-[white] md:mb-[42px] md:max-w-[453px] md:text-left md:text-[22px] md:leading-[28px]">
              Pick an online activity and take your family and friends with you!
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="md:text-[16px]font-medium rounded-[7px] bg-gradient-to-r from-[#E71575] to-[#6F01F0] px-[27px] py-[13px] text-[14px] leading-[21px] text-[white] md:px-[58px]"
            >
              sea all online experiences
            </button>
          </div>
        </div>
        <div className="lg:mt-[44px]">
          <div className="flex h-[373px] items-center bg-[url('../../../public/top-view.png')] bg-cover bg-no-repeat md:h-[573px]"></div>
        </div>
      </div>
    </div>
  </div>
);
export default DarkConcrete;
