import React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
    title: string,
    date: string,
    description: string,
    id: string
}

const ItemBlog:React.FC<Props> = ({ title, date, description, id }) => {
  return (
    <Link to={`/portfolio-pink/blog/${id}`} className="blog-item-link">
      <div className="blog-item w-full bg-lightPink p-8 shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]  hover:shadow-lg">
        <h2 className="text-3xl font-medium text-primary">{title}</h2>
        <p className="blog-item-date italic">{date}</p>
        <p className="blog-item-description">{description}</p>
      </div>
    </Link>

  );
};

export default ItemBlog;