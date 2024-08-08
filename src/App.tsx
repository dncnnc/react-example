import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts';
import SeaarchTable from './pages/search-table';
import NotFound from './pages/not-found';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="search-table" element={<SeaarchTable />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
