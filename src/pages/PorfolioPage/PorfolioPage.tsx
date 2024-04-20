import React from 'react';
import { blogs } from '../../utils/data';
import { useParams } from 'react-router-dom';
import { ItemPortfolio } from '../../components';

const PortfolioPage: React.FC<{}> = () => {
  let { nameblog } = useParams();

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary m-4">Oh, All the Things I've Done</h2>
      </div>
      
        <div>
          {nameblog}
        </div>

      <div className=' flex flex-col h-full sm:flex-row '>
        <div className='h-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {
                blogs.map((blog, index) => {
                return (
                    <ItemPortfolio date={blog.date} description={blog.description} id={blog.id} title={blog.title} key={index}/>
                )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;