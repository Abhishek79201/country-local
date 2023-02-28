import Cityescape from './components/Cityescape';

const Camping = () => (
  <div className="p-8  font-bold">
    <div className="flex justify-between">
      <div className="whitespace-pre lg:text-[38px] text-[24px]">
        Local<span className="from-green-400 to-blue-500"> Homestay and Camping </span>
      </div>
    <div>
        <a className="text-[#E71575] text-[24px]  hidden  md:block">All things to do ></a>
    </div>
    </div>
    <p className="sm:text-[12px] md:text-[22px]  font-medium pb-[32px]">Local homestay experiences offer a wide range of community-focused activities to enjoy, such as helping to preserve the surrounding environment, following scenic tour routes with expert guides, as well as learning new skills and wisdom from farmers and craftsmen.</p>
  <Cityescape/>
  </div>



   
);
export default Camping;

