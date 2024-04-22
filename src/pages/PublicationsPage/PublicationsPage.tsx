import React, { useEffect } from 'react';
import { publications } from '../../utils/data';

interface ItemPublicationProps {
  link: string,
  content: string,
  url: string,
}

const ItemPublication: React.FC<ItemPublicationProps> = ({ link, content, url }) => {
  return (
    <p>
      <a className='link' href={url}>
        {link}
      </a>
      {content}
    </p>
  );
};

const PublicationsPage: React.FC<{}> = () => {
  
  useEffect(() => {
    document.title = "jose-luis | publications";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary m-4">Thoughts, Words, and the Media</h2>
      </div>

      <div className=' flex flex-col h-full sm:flex-row '>
        <div className=' w-[100%] flex flex-col gap-4 justify-center'>
            {
                publications.map((publication, index) => {
                return (
                    <ItemPublication content={publication.content} link={publication.link} url={publication.url}  key={index}/>
                )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default PublicationsPage;