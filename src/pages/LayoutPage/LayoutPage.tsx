import React, { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen items-center hoverselect">
      
        <div className='w-[100%] p-6 flex justify-center  bg-myBackground  fixed top-0 left-0 z-10'>
          <div className='w-[100%] flex justify-between sm:w-[65%]'>
            <Link to="/portfolio-pink/" className="flex-1 flex justify-start items-center ">
              <h2 className="text-center text text-2xl font-extrabold text-primary">JOSE-LUIS</h2>
            </Link>
            <button
              className="md:hidden block text-2xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            <nav className={`text-primary p-4 w-2/5 hidden text-base font-sans font-normal sm:block`}>
              <ul className="flex flex-col md:flex-row justify-between opacity-90">
                <ListItem to="/portfolio-pink/about" active={location.pathname === '/about'}>About</ListItem>
                <ListItem to="/portfolio-pink/blog" active={location.pathname === '/blog'}>Blog</ListItem>
                <ListItem to="/portfolio-pink/portfolio" active={location.pathname === '/portfolio'}>Portfolio</ListItem>
                <ListItem to="/portfolio-pink/publications" active={location.pathname === '/publications'}>Publications</ListItem>
              </ul>
            </nav>
          </div>
        </div>

      <div className="flex-1 w-[90%]  mt-28  sm:w-[64%]">
       {
        menuOpen && 
      <nav className={`text-primary flex p-4 w-full ${menuOpen ? 'block' : 'hidden'} justify-center md:block text-base font-sans font-normal`}>
        <ul className="flex flex-col justify-center opacity-90 gap-12 text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          <ListItem to="/portfolio-pink/about" active={location.pathname === '/about'}>About</ListItem>
          <ListItem to="/portfolio-pink/blog" active={location.pathname === '/blog'}>Blog</ListItem>
          <ListItem to="/portfolio-pink/portfolio" active={location.pathname === '/portfolio'}>Portfolio</ListItem>
          <ListItem to="/portfolio-pink/publications" active={location.pathname === '/publications'}>Publications</ListItem>
        </ul>
      </nav>
       }
       {
        !menuOpen &&  <Outlet />
       }
      </div>
    </div>
  );
}

export default Layout;