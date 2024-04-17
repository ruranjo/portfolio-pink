import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Home, Layout } from './pages';


const Blog = () => <div>Blog</div>;
const Portfolio = () => <div>Portfolio</div>;
const Publications = () => <div>Publications</div>;
const NotFound = () => <div>404 - Page Not Found</div>;

const App:React.FC<{}> = () => {
  return (
    <Router>
      <Routes>
       {/* Página de inicio sin Layout */}
       <Route path="/" element={<Home />} />
        
        {/* Resto de las páginas con Layout */}
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/publications" element={<Publications />} />
        </Route>
        
        {/* Ruta comodín para páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;