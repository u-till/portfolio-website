'use client';

import { useNavigation } from '@/contexts/navigation-context';
import { useRef, useState } from 'react';

const VIDEO_ID = 'lxm1CI8qb5g';

export default function TyveeShoppingPage() {
  const { navigateTo } = useNavigation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: isMuted ? 'unMute' : 'mute', args: [] }),
      '*',
    );
    setIsMuted(!isMuted);
  };

  return (
    <section className='text-white'>
      {/* Hero: YouTube Video */}
      <div className='h-screen relative overflow-hidden'>
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&rel=0&enablejsapi=1`}
          title='TYvee Shopping'
          allow='autoplay; encrypted-media; picture-in-picture'
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100vw,177.78vh)] h-[max(100vh,56.25vw)] pointer-events-none'
        />

        {/* Title - Consistent position with other pages */}
        <div className='absolute bottom-8 left-4 md:left-8 pointer-events-none z-10'>
          <h1 className='text-[clamp(1.75rem,8vh,3rem)] md:text-[clamp(1.75rem,8vh,8rem)] font-bold text-white [text-box-trim:trim-end] [text-box-edge:cap_alphabetic] leading-none'>
            TYvee Shopping
          </h1>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          className='absolute bottom-24 md:bottom-8 left-4 md:left-auto md:right-8 z-20 px-6 py-3 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-sm transition-colors shadow-md cursor-pointer flex items-center gap-2 w-fit'
        >
          {isMuted ? 'unmute' : 'mute'}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
            {isMuted ? (
              <>
                <line x1='23' y1='9' x2='17' y2='15' />
                <line x1='17' y1='9' x2='23' y2='15' />
              </>
            ) : (
              <>
                <path d='M15.54 8.46a5 5 0 0 1 0 7.07' />
                <path d='M19.07 4.93a10 10 0 0 1 0 14.14' />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Info Content - Vertical 5-Column Layout */}
      <div className='px-4 md:px-8 pt-16 pb-16'>
        <div className='flex flex-col gap-8'>
          {/* Brief Section */}
          <div>
            <h2 className='text-xl font-extrabold tracking-tight border-b-2 border-white pb-2 mb-4'>brief</h2>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-y-2 text-base'>
              <div className='hidden md:block'></div>
              <div className='hidden md:block'></div>
              <div className='hidden md:block'></div>
              <div className='md:col-span-2'>
                <p className='leading-relaxed'>
                  My friend Yvee asked me to create the music for her bachelor thesis project. I produced a TV jingle
                  and picked songs from my export folder that matched the vibe, and also helped her record the dubbing.
                </p>
              </div>
            </div>
          </div>

          {/* specifications Section */}
          <div>
            <h2 className='text-xl font-extrabold tracking-tight border-b-2 border-white pb-2 mb-4'>specifications</h2>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-y-2 text-base'>
              <div className='hidden md:block'></div>
              <div className='font-bold md:text-right'>Year</div>
              <div className='hidden md:block'></div>
              <div className='md:col-span-2'>2021</div>

              <div className='hidden md:block'></div>
              <div className='font-bold md:text-right'>For</div>
              <div className='hidden md:block'></div>
              <div className='md:col-span-2'>Yvee Nogara</div>

              <div className='hidden md:block'></div>
              <div className='font-bold md:text-right'>Type</div>
              <div className='hidden md:block'></div>
              <div className='md:col-span-2'>Music & Voice</div>
            </div>
          </div>

          {/* credits Section */}
          <div>
            <h2 className='text-xl font-extrabold tracking-tight border-b-2 border-white pb-2 mb-4'>credits</h2>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-y-2 text-base'>
              <div className='hidden md:block'></div>
              <div className='font-bold md:text-right'>Project</div>
              <div className='hidden md:block'></div>
              <div className='md:col-span-2'>
                <a
                  href='https://hub.hslu.ch/design-film-kunst/katalog/yvee-nogara/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline hover:no-underline'
                >
                  Yvee Nogara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className='px-4 md:px-8 pb-16'>
        <div className='flex justify-between items-center border-b-2 border-white pb-2'>
          <span
            onClick={() => navigateTo('/')}
            className='font-bold cursor-pointer lowercase text-[clamp(0.75rem,3vh,1.125rem)] md:text-[clamp(1rem,4vh,4.5rem)] leading-none hover:opacity-60 transition-opacity'
          >
            index
          </span>
          <span
            onClick={() => navigateTo('/about')}
            className='font-bold cursor-pointer lowercase text-[clamp(0.75rem,3vh,1.125rem)] md:text-[clamp(1rem,4vh,4.5rem)] leading-none hover:opacity-60 transition-opacity'
          >
            about
          </span>
        </div>
      </div>
    </section>
  );
}
