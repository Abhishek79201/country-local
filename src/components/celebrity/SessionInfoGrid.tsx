import Image from 'next/image';
import { motion } from 'framer-motion';
import { animationWrapper, fadeInUp } from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint operator-linebreak: "off" */
const SessionInfoGrid = () => {
  const information = [
    {
      id: 1,
      title: 'VIDEO MESSAGES',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-message.png',
    },
    {
      id: 2,
      title: 'DM ON INSTAGRAM',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-instagram.png',
    },
    {
      id: 3,
      title: 'ONLINE CALLS & SESSION',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-headphone.png',
    },
    {
      id: 4,
      title: 'REAL MEETS',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-calendar.png',
    },
    {
      id: 5,
      title: 'PROMOTE YOUR BRAND',
      description: 'Sed habitant diam massa id egestas ante.',
      image: '/icons/pg-tag.png',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] pt-8 pb-8 shadow-lg md:pt-14 md:pb-14">
      <div className="flex flex-wrap items-stretch gap-3 px-4 md:px-9 xl:flex-nowrap xl:justify-between">
        {information &&
          information.map((info) => (
            <div
              key={info.id}
              className="flex w-full items-center gap-2 rounded-xl bg-[#F8F8F8] py-5 px-4 md:w-[49%] lg:w-[32%] xl:w-[19%]"
            >
              <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full">
                <Image
                  src={info.image}
                  width={54}
                  height={54}
                  alt={info.title}
                />
              </div>
              <div className="text-left text-black">
                <p className="pb-1 text-sm font-bold">{info.title}</p>
                <p className="text-xs opacity-70">{info.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SessionInfoGrid;
