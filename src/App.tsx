import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Blog, Home, Layout, NotFound, Portfolio, Publications } from './pages';

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
          <Route path="/blog/:nameblog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Ruta comodín para páginas no encontradas */}
        
      </Routes>
    </Router>
  );
}

export default App;