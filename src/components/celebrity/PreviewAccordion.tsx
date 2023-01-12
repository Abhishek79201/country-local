/* eslint react/prop-types: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import ArrowDownIcon from '../../../public/icons/chevron-down.svg';

const PreviewAccordion = () => {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      title: 'Accordion 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ex illo dolores eos, incidunt, ad perspiciatis tempora dolorum velit aut reprehenderit in? Animi maxime ea ipsum, quis doloremque ducimus nemo officiis, fugit nam consequatur et nesciunt culpa minima soluta nobis architecto maiores iure ipsam sapiente cumque, repellat laudantium. Nulla.',
      open: true,
    },
    {
      id: 2,
      title: 'Accordion 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ex illo dolores eos, incidunt, ad perspiciatis tempora dolorum velit aut reprehenderit in? Animi maxime ea ipsum, quis doloremque ducimus nemo officiis, fugit nam consequatur et nesciunt culpa minima soluta nobis architecto maiores iure ipsam sapiente cumque, repellat laudantium. Nulla.',
      open: false,
    },
    {
      id: 3,
      title: 'Accordion 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ex illo dolores eos, incidunt, ad perspiciatis tempora dolorum velit aut reprehenderit in? Animi maxime ea ipsum, quis doloremque ducimus nemo officiis, fugit nam consequatur et nesciunt culpa minima soluta nobis architecto maiores iure ipsam sapiente cumque, repellat laudantium. Nulla.',
      open: false,
    },
  ]);

  const [playerState, setPlayerState] = useState({
    playing: false,
    // playbackRateControl: false,
    controls: true,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const handleAccordionClick = (id: number) => {
    setAccordions(
      accordions.map((accordion) => {
        if (accordion.id === id) {
          return {
            ...accordion,
            open: true,
          };
        }
        return {
          ...accordion,
          open: false,
        };
      }),
    );
  };

  return (
    <div className="pb-16">
      <div className="container">
        <div className="flex">
          <div className="w-7/12">
            {accordions.map(({ id, title, content, open }) => (
              <div
                key={id}
                className={`relative flex flex-col items-center justify-center px-6 pt-3 pb-3 ${
                  open
                    ? 'rounded-2xl bg-white shadow-xl'
                    : 'border-b border-b-[#E4E4E4]'
                }`}
              >
                <button
                  type="button"
                  className="focus-purple relative w-full py-4 text-left text-[16px] font-bold"
                  onClick={() => handleAccordionClick(id)}
                >
                  <div className="flex w-full items-center text-[#4A4A4A]">
                    <div className="block rounded-full bg-black px-[13px] py-[6px] text-white">
                      Part {` ${id}`}
                    </div>
                    <h3 className="ml-3 text-[26px] font-bold text-black">
                      {title}
                    </h3>
                    <span
                      className={`svg_icon absolute right-3 inline-block w-[15px] text-transparent transition-all duration-300 ease-in-out md:w-[18px] ${
                        open && 'rotate-180'
                      }`}
                    >
                      <ArrowDownIcon />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 leading-relaxed">{content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="w-5/12">
            <div className="pl-10">
              <div className="relative">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                  // playing={playerState.playing}
                  controls={isPlaying}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreviewAccordion;
