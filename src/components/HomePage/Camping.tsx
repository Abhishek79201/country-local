import Cityescape from './components/Cityescape';

const Camping = () => (
  <div className="lg:p-[60px] p-[20px]  font-bold">
    <div className="flex justify-between">
      <div className=" lg:text-[38px] text-[24px]">
        Local<span className=" purple_gradient_text_deep"> Homestay and Camping </span>
      </div>
    <div>
        <a className="text-[#E71575] text-[24px]  hidden  lg:block cursor-pointer">All things to do ></a>
    </div>
    </div>
    <p className="sm:text-[12px] lg:text-[22px]  font-medium pb-[32px]">Local homestay experiences offer a wide range of community-focused activities to enjoy, such as helping to preserve the surrounding environment, following scenic tour routes with expert guides, as well as learning new skills and wisdom from farmers and craftsmen.</p>
  <Cityescape/>
  <div className="sea text-[#E71575] text-[16px] font-bold pt-[15px] lg:hidden cursor-pointer">See all ></div>
  </div>



   
);
export default Camping;

