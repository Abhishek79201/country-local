import Checkmark from '../../../public/icons/checked-purple.svg';
import UnderLine from '../common/UnderLine';

const AboutProperty = () => (
  <div>
    <div>
      <h3 className="mb-2 text-[22px] font-bold text-[#222] ">
        Description about the Property
      </h3>
      <div className="mb-5 flex gap-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="w-[100px] rounded-md bg-[#f8f8f8] py-1 text-center  "
          >
            <p className="text-[10px] text-[#808080]">History & Culture</p>
          </div>
        ))}
      </div>
      <p className="mb-5 text-base text-[#808080] md:text-[18px]">
        Hloyo Village is located on Doi Mae Salong in Chiang Rai. The Akha, a
        hill tribe, lives here in a very simple way. Their Thai might not be
        very fluent, so sometimes you need to use your body language and of
        course your heart when you speak with them! Leave all the hustle and
        bustle behind and lets relax. Staying in a traditional clay house,
        sipping hot coffee, watching a sunrise doesnt it sound right enough to
        leave everything and just come here!?
      </p>

      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="flex items-start py-[8px]">
          <div className="svg_icon w-10 text-[#E71575] md:w-6">
            <Checkmark />
          </div>
          <div className="ml-2 text-sm">
            Experience to taste hill tribe food, prepare ingredients and learn
            how to cook Ahka food with hosts
          </div>
        </div>
      ))}
    </div>
    <UnderLine />
  </div>
);

export default AboutProperty;
