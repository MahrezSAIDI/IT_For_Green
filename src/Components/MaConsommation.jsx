import React from 'react';

function MaConsommation() {
  return (
    <div className='conso'>
      <div className='consommations'>
        <div className='conso_hebdo'><p>Consommation 
          hebdomadaire</p></div>
        <div className='conso_jour'><p>Consommation 
          Journaliére</p></div>
      </div>
      <div>
        <div className='conso_text'></div>
        <div className='conso_graph'></div>
      </div>
    </div>
  );
}

export default MaConsommation;
