import { statisticsCardsData } from '../PrData/statisticsCardsData';

const Consumised = () => (
  <div className="bg-[#F8F8F8] p-[20px] font-bold lg:p-[60px]">
    <div className="flex justify-between">
      <div className=" text-[24px] lg:text-[38px]">
        Looking For{' '}
        <span className=" purple_gradient_text_deep">
          Costumised Packages?{' '}
        </span>
      </div>
      <div>
        <button className="hidden rounded-[10px] bg-[#E71575] py-[16px] px-[32px] text-[20px] font-semibold text-[white] text-[#E71575]  lg:block">
          + Post a Request
        </button>
      </div>
    </div>
    <div className="mt-6 md:mt-12">
      <div className="mb-6 grid gap-y-4 gap-x-4 md:mb-12  md:gap-y-9 md:gap-x-9 lg:grid-cols-2 xl:grid-cols-2 ">
        {statisticsCardsData.map(({ title, subtitle }) => (
          <div className="relative h-[115px] rounded-2xl bg-[white] md:h-[231px]">
            <div className="absolute left-2.5 top-[28px] -mt-4  grid h-[93px] w-[78px] place-items-center rounded-2xl bg-[#F8F8F8] md:top-[38px] md:left-6 md:h-[187px] md:w-[158px]" />
            <div className="absolute left-[93px] p-4 md:left-[200px]  ">
              <div
                className=" blue-gray text-blue-gray-600 pb-[8px] text-[14px] font-extrabold font-bold md:pb-[16px] md:text-[28px]"
                color="blue-gray"
              >
                {title}
              </div>
              <div className="text-[10px] font-medium md:text-[18px]">
                {subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center">
      <button className=" rounded-[10px] bg-[#E71575] py-[16px] px-[26px] text-center text-[16px] font-semibold text-[white] text-[#E71575]  lg:hidden">
        + Post a Request
      </button>
    </div>
  </div>
);
export default Consumised;
