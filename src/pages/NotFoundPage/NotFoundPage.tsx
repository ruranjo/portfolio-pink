import React, { useEffect } from 'react'
import { TagLink } from '../../components'


const NotFoundPage:React.FC<{}> = () => {
  useEffect(() => {
    document.title = "jose-luis | notfound";
  }, []);

  return (
    
        <div className="w-[100%] h-[40%] flex flex-col gap-2 sm:w-[45%]">
            <div className='flex justify-between border '>
              <h2 className="text-center  text-3xl font-black text-primary tracking-wider">404</h2>
            </div>
            <div className='flex justify-between border '>
              <h2 className="text-center  text-xl font-black text-primary tracking-wider">Page not found :(</h2>
            </div>
            <p className='text-xl'>
                It's okay, since you can try again! If you'd rather not, though, you can go see some <a className='link' href='https://www.google.com/search?q=cat+photos'>cat photos</a>.  to make your day better :D
            </p>
            <div className='w-[100%]  mt-4 flex justify-start gap-2'>
              <TagLink active={false} href='/portfolio-pink/' label='Return home' isRoute={true} />
            </div>
        </div>
 
  )
}

export default NotFoundPage