import React, { useEffect } from 'react'
import { iconsList } from '../../utils/data'
import { IconLink, TagLink } from '../../components'


const HomePage:React.FC<{}> = () => {
  useEffect(() => {
    document.title = "jose-luis | home";
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center hoverselect">
      
        
        <div className="w-[100%] h-[40%] flex flex-col gap-2 sm:w-[45%]">
            <div className='flex justify-between border '>
              <h2 className="text-center  text-3xl font-black text-primary tracking-wider">JOSE-LUIS <span className='text-lg italic'>( template made by ruranjo)</span></h2>
            </div>
            <p className='text-xl'>
              Hello, I'm José Luis (he/him), pursuing dual degrees in Computer
              Engineering and Computer Science at <a className='link' href='#'>the University of Southern California</a>.
              My passions lie in journalism, design, and engineering, driving me to explore how things work and to seek ways to improve them.
              Thank you for visiting, and I hope you find your time here enjoyable!
            </p>
            <div className='w-[100%]  mt-4 flex justify-start gap-2'>
              <TagLink active={false} href='/about' label='About' isRoute={true} />
              <TagLink active={false} href='/blog' label='Blog' isRoute={true} />
              <TagLink active={false} href='/portfolio' label='Portfolio' isRoute={true} />
              <TagLink active={false} href='/publications' label='Publications' isRoute={true} />
            </div>
            <div className='w-[100%] h-[200px]| flex justify-start gap-2 mt-2'>
            {
            iconsList.map((icon , index)=>{
              return ( 
                  <IconLink active={false} icon={icon.icon} href={icon.address}  title={icon.name}  key={index} />
              )
            })
            }
            </div>
        </div>
        

    </div>
  )
}

export default HomePage