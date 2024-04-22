import React from 'react';
import { Link } from 'react-router-dom';
import { TagLink } from '../TagLink';

export interface Props {
    title: string,
    date: string,
    description: string,
    id: number,
    tags: string[]
}

const ItemPortfolio:React.FC<Props> = ({ title, date, description, id, tags }) => {
  return (
    <Link to={`/blog/${id}`} className="blog-item-link">
      <div className="blog-item w-full min-h-96 flex flex-col justify-between items-start bg-lightPink p-8 shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]  hover:shadow-lg">
        <div className='flex flex-col gap-2'>
          <h2 className="text-3xl font-medium text-primary">{title}</h2>
          <p className="blog-item-date italic">{date}</p>
          <p className="blog-item-description">{description}</p>
        </div>
        <div className='flex gap-4 flex-wrap  m-4'>
        {
          tags.map((taglabel, index)=>{
            return (
              <TagLink active={false} href='#' label={taglabel} key={index} isRoute={false} />
            )
          })
        }
      </div>
      </div>
    </Link>
  );
};

export default ItemPortfolio;