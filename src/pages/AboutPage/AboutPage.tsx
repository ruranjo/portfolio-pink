import React from 'react';
import { avatarIcon } from '../../utils/assets';
import { iconsList } from '../../utils/data';
import { IconLink, TagLink } from '../../components';

const AboutPage: React.FC<{}> = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary">Whomst?</h2>
      </div>

      <div className=' flex flex-col h-full sm:flex-row '>
        <div className='w-[100%] relative flex flex-1 flex-col justify-start items-center sm:w-[30%] '  >
          <div className='relative flex flex-col w-[100%] justify-center items-center '>
            <div className='w-[260px] h-[260px] bg-secondary absolute -z-10' style={{ transform: 'rotate(5deg)' }}>
            </div>
            <img className='w-[260px] h-[260px]' src={avatarIcon} alt="" />
          </div>
          <div className='w-[100%]  mt-4 flex justify-center gap-2'>
            <TagLink active={false} href='#' label='Resume' />
            <TagLink active={false} href='#' label='Headshot' />
          </div>
          <div className='w-[100%] h-[200px]| flex justify-center gap-2 mt-2'>
          {
            iconsList.map((icon , index)=>{
              return ( 
                  <IconLink active={false} icon={icon.icon} href={icon.address}  title={icon.name}  key={index} />
              )
            })
           }
          </div>

        </div>

        <div className=' w-[100%] flex justify-center sm:w-[70%]'>
          <div className=' w-[85%] flex flex-col gap-4 mt-12 sm:mt-0'>
            <p>
              Hallo! My name is jose-luis (he/his) and I'm a American gal studying
              Computer Engineering and Computer Science at the<a className='link' href='#'> University of Southern California</a>.
              I'm originally from Northern Virginia and I graduated from <a className='link' href='#'> Thomas Jefferson High School
              for Science and Technology</a>. That's where I discovered my love for filling niches at the
              intersections of different fields. I'm broadly interested in designing and writing code
              to build impactful products, AI ethics and policy, and expanding tech journalism to a
              broader audience.
            </p>
            <p>
              At USC, I'm a <a className='link' href='#'> Viterbi Student Ambassador</a>, where I share my experience as a student studying
              engineering at USC with prospective students and their families. I also recruit <a className='link' href='#'>amazing
              speakers</a>, publish <a className='link' href='#'> cool articles</a>, and sometimes write <a className='link' href='#'>code</a> at <a className='link' href='#'>HackSC</a>.
            </p>
            <p>
              By leveraging my technical background and my love of writing, I cover noteworthy innovations,
              accomplishments, and events for the <a className='link' href='#'>USC Thomas Lord Department of Computer Science</a>.
              I also lead copy editing efforts at <a className='link' href='#'>College Brief</a>, a nonprofit dedicated to instilling
              newsreading habits in college-aged audiences. I previously led the copy desk at
              <a className='link' href='#'>Annenberg Media</a>, where I began my journey of contributing to accurate, high-quality journalism.
            </p>
            <p>
              In my (rare) spare time, you can find me eating Taiwanese food, <a className='link' href='#'>listening to music</a>,
              and <a className='link' href='#'>running from my life problems</a>. Feel free to reach out via email; I'd love to chat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

