import React, { useState } from 'react';

import MaConsommation from './Components/MaConsommation';
import GreenNews from './Components/GreenNews';
import Menu from './Components/Menu';
function App() {
  const  [selectedOption, setSelectedOption]=useState(null);

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case 'ma_consommation':
        return <MaConsommation />;
      case 'mes_news':
        return <GreenNews />;
      default:
        return null;
    }
  };
  return (
  <div className="app">
    <div className="menu-container">
      <Menu onSelectOption={setSelectedOption} />
    </div>
    <div className="content-container">
      {renderSelectedOption()}
    </div>
  </div>
  );
}

export default App;
