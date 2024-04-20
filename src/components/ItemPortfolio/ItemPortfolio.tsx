import React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
    title: string,
    date: string,
    description: string,
    id: string
}

const ItemPortfolio:React.FC<Props> = ({ title, date, description, id }) => {
  return (
    <Link to={`/blog/${id}`} className="blog-item-link">
      <div className="blog-item w-full min-h-64 bg-lightPink p-8 shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]  hover:shadow-lg">
        <h2 className="text-3xl font-medium text-primary">{title}</h2>
        <p className="blog-item-date italic">{date}</p>
        <p className="blog-item-description">{description}</p>
      </div>
    </Link>
  );
};

export default ItemPortfolio;