import React from 'react';
import { blogs, tagsBlog } from '../../utils/data';
import { TagLink } from '../../components';
import { useParams } from 'react-router-dom';
import ItemBlog from '../../components/ItemBlog/ItemBlog';

const BlogPage: React.FC<{}> = () => {
  let { nameblog } = useParams();

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between border '>
        <h2 className="text-center text text-4xl font-extrabold text-primary m-4">How To Take Over The World™</h2>
      </div>
      <div className='flex gap-4 flex-wrap  m-4'>
        {
          tagsBlog.map((taglabel, index)=>{
            return (
              <TagLink active={false} href='#' label={taglabel} key={index} />
            )
          })
        }
      </div>
        <div>
          {nameblog}
        </div>

      <div className=' flex flex-col h-full sm:flex-row '>
        <div className=' w-[100%] flex flex-col gap-4 justify-center border border-red-600'>
         {
          blogs.map((blog, index)=>{
            return (
              <ItemBlog date={blog.date} description={blog.description} id={blog.id} title={blog.title} key={index}/>
            )
          })
         }
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

