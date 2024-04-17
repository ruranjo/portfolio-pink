// Layout.tsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

interface ListItemProps {
    to: string;
    children: React.ReactNode;
    active: boolean;
}
  
  const ListItem: React.FC<ListItemProps> = ({ to, children, active }) => {
    return (
      <li className={`mr-4 relative group transition-all duration-300 ${active ? 'border-b-2 border-amber-950' : ''}`}>
        <Link to={to}>{children}</Link>
        {!active && <span className="absolute inset-x-0 bottom-0 h-[2px] bg-amber-950 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>}
      </li>
    );
  };

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen items-center ">
      <div className='flex justify-between w-[64%] m-5 border border-amber-950'>
        <Link to="/" className="flex-1 flex justify-start items-center">
          <h2 className="text-center text text-2xl font-extrabold text-primary">JOSE-LUIS</h2>
        </Link>
        <nav className="text-primary p-4 w-2/5  text-base font-sans font-normal">
          <ul className="flex justify-between opacity-90">
            <ListItem to="/about" active={location.pathname === '/about'}>About</ListItem>
            <ListItem to="/blog" active={location.pathname === '/blog'}>Blog</ListItem>
            <ListItem to="/portfolio" active={location.pathname === '/portfolio'}>Portfolio</ListItem>
            <ListItem to="/publications" active={location.pathname === '/publications'}>Publications</ListItem>
          </ul>
        </nav>
      </div>
      <div className="flex-1 w-[64%] border border-red-800 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;