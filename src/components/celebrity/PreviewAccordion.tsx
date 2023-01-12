/* eslint react/prop-types: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @next/next/no-img-element: "off" */
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import useViewport from '../../hooks/useViewport';

import ArrowDownIcon from '../../../public/icons/chevron-down.svg';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const PreviewAccordion = () => {
  const { width } = useViewport();
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      title: 'Accordion 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ex illo dolores eos, incidunt, ad perspiciatis tempora dolorum velit aut reprehenderit in? Animi maxime ea ipsum, quis doloremque ducimus nemo officiis, fugit nam consequatur et nesciunt culpa minima soluta nobis architecto maiores iure ipsam sapiente cumque, repellat laudantium. Nulla.',
      open: true,
      videoUrl: 'https://vimeo.com/90509568',
      posterUrl: 'prime-gig-slider-2.jpg',
    },
    {
      id: 2,
      title: 'Accordion 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ex illo dolores eos, incidunt, ad perspiciatis tempora dolorum velit aut reprehenderit in? Animi maxime ea ipsum, quis doloremque ducimus nemo officiis, fugit nam consequatur et nesciunt culpa minima soluta nobis architecto maiores iure ipsam sapiente cumque, repellat laudantium. Nulla.',
      open: false,
      videoUrl: 'https://vimeo.com/169599296',
      posterUrl: 'prime-gig-slider-4.jpg',
    },
    {
      id: 3,
      title: 'Accordion 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ex illo dolores eos, incidunt, ad perspiciatis tempora dolorum velit aut reprehenderit in? Animi maxime ea ipsum, quis doloremque ducimus nemo officiis, fugit nam consequatur',
      open: false,
      videoUrl: 'https://vimeo.com/90509568',
      posterUrl: 'prime-gig-slider-5.jpg',
    },
  ]);

  const getSelectedUrls = () => {
    const selectedAccordion = accordions.find((accordion) => accordion.open);
    return {
      videoUrl: selectedAccordion?.videoUrl,
      posterUrl: selectedAccordion?.posterUrl,
    };
  };

  const [playerState, setPlayerState] = useState({
    playing: false,
    controls: false,
  });

  const handlePlayPause = () => {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  };

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

    setPlayerState({
      ...playerState,
      playing: false,
    });
  };

  return (
    <div className="pb-16">
      <div className="container">
        <div className="flex">
          <div className="w-full lg:w-1/2">
            {accordions.map(({ id, title, content, open }) => (
              <div
                key={id}
                className={`relative flex flex-col items-center justify-center px-4 pt-3 pb-3 lg:px-6 ${
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
                      {width < 1064 && (
                        <div className="relative mb-2 overflow-hidden rounded-xl">
                          <ReactPlayer
                            url={getSelectedUrls().videoUrl}
                            controls={playerState.controls}
                            playing={playerState.playing}
                            width="100%"
                          />
                          <div
                            aria-label="Play Pause"
                            role="button"
                            tabIndex={0}
                            onKeyDown={() => handlePlayPause()}
                            onClick={() => handlePlayPause()}
                            className="absolute left-0 top-0 h-full w-full cursor-pointer"
                          >
                            {!playerState.playing && (
                              <img
                                src={getSelectedUrls().posterUrl}
                                alt="poster"
                                className="h-full w-full object-cover"
                              />
                            )}
                          </div>
                          {!playerState.playing && (
                            <button
                              type="button"
                              className="absolute top-[50%] left-[50%] flex -translate-x-[50%] -translate-y-[50%] transform items-center justify-center rounded-md border-2 border-white bg-black bg-opacity-50 px-4 py-2"
                              onClick={() => handlePlayPause()}
                            >
                              <img
                                src="/icons/subtract.png"
                                alt="play"
                                className="mr-2 w-5"
                              />
                              <span className="text-xl font-bold text-white">
                                Preview
                              </span>
                            </button>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {width > 1063 && (
            <div className="w-1/2">
              <div className="pl-10">
                <div className="relative overflow-hidden rounded-xl">
                  <ReactPlayer
                    url={getSelectedUrls().videoUrl}
                    controls={playerState.controls}
                    playing={playerState.playing}
                    width="100%"
                  />
                  <div
                    aria-label="Play Pause"
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => handlePlayPause()}
                    onClick={() => handlePlayPause()}
                    className="absolute left-0 top-0 h-full w-full cursor-pointer"
                  >
                    {!playerState.playing && (
                      <img
                        src={getSelectedUrls().posterUrl}
                        alt="poster"
                        className="h-full object-cover"
                      />
                    )}
                  </div>
                  {!playerState.playing && (
                    <button
                      type="button"
                      className="absolute top-[50%] left-[50%] flex -translate-x-[50%] -translate-y-[50%] transform items-center justify-center rounded-md border-2 border-white bg-black bg-opacity-50 px-4 py-2"
                      onClick={() => handlePlayPause()}
                    >
                      <img
                        src="/icons/subtract.png"
                        alt="play"
                        className="mr-2 w-5"
                      />
                      <span className="text-xl font-bold text-white">
                        Preview
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PreviewAccordion;
