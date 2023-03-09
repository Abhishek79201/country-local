import Cityescape from './components/Cityescape';

const Voluntour = () => (
  <div className="lg:p-[60px] p-[20px] font-bold">
    <div className="flex justify-between">
      <div className="whitespace-pre lg:text-[38px] text-[24px]">
      Voluntour
      </div>
    <div>
        <a className="text-[#E71575] text-[24px]  hidden  lg:block cursor-pointer">All things to do ></a>
    </div>
    </div>
    <p className="sm:text-[12px] lg:text-[22px]  font-medium pb-[32px]">Let’s making your trip full of meaningful stories</p>
  <Cityescape/>
  <a className="sea text-[#E71575] text-[16px] font-bold pt-[15px] lg:hidden cursor-pointer">See all ></a>
  </div>



   
);
export default Voluntour;