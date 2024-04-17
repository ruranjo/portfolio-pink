import React from 'react';
import { avatarIcon } from '../../utils/assets';
import TagLink from '../../components/TagLink/TagLink';

const AboutPage: React.FC<{}> = () => {
  return (
    <div className='flex flex-col justify-between border border-amber-950 h-full'>
      <div className='flex justify-between border border-blue-900'>
        <h2 className="text-center text text-4xl font-extrabold text-primary">Whomst?</h2>
      </div>

      <div className='border border-blue-900 flex h-full'>
        <div className='w-[30%] h-[200px] relative flex flex-col justify-center items-center mt-24' >
          <div className='flex flex-col '>
            <div className='w-[260px] h-[260px] bg-secondary absolute -z-10' style={{ transform: 'rotate(5deg)' }}>
            </div>
            <img className='w-[260px] h-[260px]' src={avatarIcon} alt="" />
          </div>
          <div className='border border-blue-900 w-[100%] h-[200px] mt-4 flex justify-center gap-2'>
            <TagLink active={false} href='#' label='Resume' />
            <TagLink active={false} href='#' label='Headshot' />
          </div>
          <div className='border border-blue-900 w-[100%] h-[200px]| flex justify-center gap-2'>
            <TagLink active={false} href='#' label='Resume' />
            <TagLink active={false} href='#' label='Headshot' />
          </div>
        </div>

        <div className='border border-blue-900 w-[70%] '>
          right
        </div>
      </div>
    </div>
  );
}

export default AboutPage;