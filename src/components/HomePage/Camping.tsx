import Cityescape from './components/Cityescape';

const Camping = () => (
  <div className="p-[20px] font-bold  lg:p-[60px]">
    <div className="flex justify-between">
      <div className=" text-[24px] lg:text-[38px]">
        Local
        <span className=" purple_gradient_text_deep">Homestay and Camping</span>
      </div>
      <div>
        <a className="hidden cursor-pointer  text-[24px]  text-[#E71575] lg:block">
          All things to do
        </a>
      </div>
    </div>
    <p className="pb-[32px] font-medium  sm:text-[12px] lg:text-[22px]">
      Local homestay experiences offer a wide range of community-focused
      activities to enjoy, such as helping to preserve the surrounding
      environment, following scenic tour routes with expert guides, as well as
      learning new skills and wisdom from farmers and craftsmen.
    </p>
    <Cityescape />
    <div className="sea cursor-pointer pt-[15px] text-[16px] font-bold text-[#E71575] lg:hidden">
      See all
    </div>
  </div>
);
export default Camping;
