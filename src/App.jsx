import React from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import FeaturedJobs from './component/Featuredjobs/FeaturedJobs';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      
     
    </div>
  );
};

export default App;
