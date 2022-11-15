/* eslint react/jsx-one-expression-per-line: "off" */
import StarIcon from '../../../../public/icons/star.svg';
import USFlag from '../../../../public/icons/american-flag.svg';

interface ReviewCardProps {
  item: number;
}

const ReviewCard = ({ item }: ReviewCardProps) => (
  <div className="md:m-0 lg:w-[49%]">
    <div
      className="flex flex-wrap overflow-hidden rounded-[10px] sm:flex-nowrap"
      style={{ boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)' }}
    >
      <div
        className="flex h-[160px] w-full shrink-0 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat sm:h-auto sm:max-w-[202px]"
        style={{ backgroundImage: `url(/review-headshot-${item}.jpg)` }}
      >
        {/* <Image
          src={`/review-headshot-${item}.jpg`}
          width={202 * 2}
          height={183 * 2}
          alt="review 1"
          className="w-full rounded-[10px] sm:w-auto"
        /> */}
      </div>
      <div className="flex-auto py-3 px-4">
        <div className="flex justify-between">
          <div className="text-base">
            Review by <strong>Annett Prudlo</strong> from Germany
          </div>
          <div className="flex gap-[1px] pt-1 text-[#FFCE31]">
            <div className="svg_icon w-3.5">
              <StarIcon />
            </div>
            <div className="svg_icon w-3.5">
              <StarIcon />
            </div>
            <div className="svg_icon w-3.5">
              <StarIcon />
            </div>
            <div className="svg_icon w-3.5">
              <StarIcon />
            </div>
            <div className="svg_icon w-3.5 text-[#DADADA]">
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="mt-2 text-xs">April 22, 2020</div>
        <div className="pb-3 pt-3 text-sm text-black opacity-70">
          Sit et integer nisl diam malesuada. Sed cras natoque metus fermentum.
          Morbi morbi urna, molestie venenatis. Consectetur sit ac sed nunc
          interdum tortor ultrices vel pulvinar. Sit at hendrerit magna tempus,
          ac sem sagittis, nulla.
        </div>
        <div className="flex items-center">
          <div className="mr-1 w-5">
            <USFlag />
          </div>
          <span className="text-xs text-black opacity-50">
            United States, NY
          </span>
        </div>
      </div>
    </div>
  </div>
);
export default ReviewCard;
