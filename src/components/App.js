import React from 'react';

import CityList from '../containers/CityList';
import CityDetail from '../containers/CityDetail';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <CityDetail />
    </div>
  );
};

export default App;
