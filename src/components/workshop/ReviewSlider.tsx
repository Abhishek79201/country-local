import Image from 'next/image';
import StarIcon from '../../../public/icons/star.svg';

const ReviewSlider = () => (
  <div className="container">
    <div className="-mx-2 flex flex-wrap items-center justify-center gap-y-4">
      {[1, 2, 3, 4].map((item) => (
        <div className="w-full px-2 md:w-1/2 lg:w-1/4" key={item}>
          <div className="flex items-center gap-5 rounded-lg p-2 shadow-pop">
            <div className="h-[78px] w-[66px] rounded border">
              <Image src="/icons/tower.png" width={66} height={78} />
            </div>

            <div>
              <div className="flex items-center text-[#FFCE31]">
                <span className="svg_icon inline-block w-[8px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[8px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[8px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[8px]">
                  <StarIcon />
                </span>
                <span className="svg_icon inline-block w-[8px]">
                  <StarIcon />
                </span>
                <span className="ml-3 text-[11px] text-[#404145]">
                  {' '}
                  5 Reviews
                </span>
              </div>
              <h2 className="py-1 text-base font-semibold text-[#222]">
                Art and Culture
              </h2>
              <h4 className="text-sm font-semibold text-[#808080]">
                49 experiences
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewSlider;
