import Image from 'next/image';

const PinkPurpleGradient = () => (
  <div className="bg-[#E71575]">
    <div className="pointer-events-none flex">
      <Image
        src="/pink-purple-gradient-bg.jpg"
        width={1500 * 2}
        height={110 * 2}
      />
    </div>
  </div>
);

export default PinkPurpleGradient;
