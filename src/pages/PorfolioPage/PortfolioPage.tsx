import React, { useEffect } from 'react';
import { projects } from '../../utils/data';
import { ItemPortfolio } from '../../components';

const PortfolioPage: React.FC<{}> = () => {
  
  useEffect(() => {
    document.title = "jose-luis | portfolio";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary m-4">Oh, All the Things I've Done</h2>
      </div>
      
      <div className=' flex flex-col h-full sm:flex-row '>
        <div className='h-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {
                projects.map((project, index) => {
                return (
                    <ItemPortfolio date={project.date} description={project.description} id={project.id} title={project.title} tags={project.tags} key={index}/>
                )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;