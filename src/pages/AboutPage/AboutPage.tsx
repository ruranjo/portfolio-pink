import React, { useEffect } from 'react';
import { avatarIcon } from '../../utils/assets';
import { iconsList } from '../../utils/data';
import { IconLink, TagLink } from '../../components';

const AboutPage: React.FC<{}> = () => {

  useEffect(() => {
    document.title = "jose-luis | about";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary">Whomst?</h2>
      </div>

      <div className=' flex flex-col h-full mt-8 sm:flex-row '>
        <div className='w-[100%] relative flex flex-1 flex-col justify-start items-center sm:w-[30%] '  >
          <div className='relative flex flex-col w-[100%] justify-center items-center '>
            <div className='w-[260px] h-[260px] bg-secondary absolute -z-10' style={{ transform: 'rotate(5deg)' }}>
            </div>
            <img className='w-[260px] h-[260px]' src={avatarIcon} alt="" />
          </div>
          <div className='w-[100%]  mt-4 flex justify-center gap-2'>
            <TagLink active={false} href='#' label='Resume' isRoute={false} />
            <TagLink active={false} href='#' label='Headshot' isRoute={false} />
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
                Greetings! I'm jose-luis (he/his), an American student pursuing dual degrees in Computer
                Engineering and Computer Science at the<a className='link' href='#'> University of
                Southern California</a>. My journey began in Northern Virginia,
                where I attended<a className='link' href='#'> Thomas Jefferson High School for Science and Technology</a>.
                It was there that I cultivated a passion for bridging diverse disciplines. I am deeply engaged
                in developing software solutions, exploring AI ethics and policy, and promoting tech journalism to wider audiences.
            </p>
            <p>
                At USC, I serve as a <a className='link' href='#'> Viterbi Student Ambassador</a>,
                where I share insights about my engineering education with prospective students and their
                families. I actively recruit <a className='link' href='#'>notable speakers</a>,
                generate <a className='link' href='#'> engaging content</a>, and occasionally develop
                <a className='link' href='#'>software</a> at <a className='link' href='#'>HackSC</a>.
            </p>
            <p>
                Utilizing my technical expertise and passion for storytelling,
                I highlight significant technological advancements and events through my work
                with the <a className='link' href='#'>USC Thomas Lord Department of Computer
                Science</a>. I also spearhead editorial initiatives at <a className='link' href='#'>College Brief</a>,
                a nonprofit aimed at promoting reading habits among college students. My earlier experience leading
                the editorial team at <a className='link' href='#'>Annenberg Media</a> was instrumental in my
                development as a contributor to high-quality journalism.
            </p>
            <p>
                In the limited free time I have, I indulge in Taiwanese cuisine, enjoy 
                <a className='link' href='#'>listening to music</a>,
                and use <a className='link' href='#'>running</a> 
                as a fun escape from daily stresses. Don't hesitate to reach out via email—I'm
                always eager to connect and engage in meaningful conversations!
            </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

