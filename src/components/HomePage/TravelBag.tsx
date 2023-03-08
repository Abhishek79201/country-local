const TravelBag = () => (
  <div className="bg-white  p-8 font-bold">
    <div className="relative h-full h-[470px] w-full rounded-[33px] bg-[url('../../../public/travel.jpg')] bg-cover bg-no-repeat">
      <div className="absolute top-[54px] left-[38px] max-h-[430px] max-w-[744px] rounded-[33px] border border-white  pt-[46px] pl-[40px] text-white backdrop-blur-[80px]">
        <h3 className="text-[24px] font-bold leading-[60px] lg:text-[38px]">
          How does it work
        </h3>
        <p className="pb-[49px] text-[14px] font-medium leading-[17px] lg:text-[25px] lg:leading-[42px]">
          Countrylocals.com is a project to find local experts for tourism. Here
          sellers can host their tourism products, classes, as well as sell gigs
          .Even celebrities and influencers can become local guides and sell
          their services.
        </p>
      </div>
    </div>
  </div>
);
export default TravelBag;
