import React, { useState } from 'react';
import '../css/BurgerMenu.css';
import jauge from '../img/jauge.png';

function BurgerMenuPage() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  }

  const renderAccueil = () => (
    <div className='All'>
      <div>
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
      <div className='ContentHome'>
        <div className='Hometext'>
          <p>Votre temps d'ecran est de 3:25 min </p>
          <p>Applications actives en arriere plan : 5</p>
          <p>Consommation d'energie : 4Kw</p>
        </div>
        <div className='image'>
          <img src={jauge} alt="logo" />
        </div>
      </div>
    </div>  
  );

  const renderProfil = () => (
    <div>
      <h1>Profil</h1>
      <p>Contenu de l'onglet Profil</p>
    </div>
  );

  const renderParametres = () => (
    <div>
      <h1>Paramètres</h1>
      <p>Contenu de l'onglet Paramètres</p>
    </div>
  );

  return (
    <div className="burger-page">
      <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="list-group">
            <li
              className={`button transparent-button ${menuOpen ? 'highlight' : ''}`}
              onClick={() => handleTabClick('Accueil')}
            >
              Accueil
            </li>
            <li
              className={`button transparent-button ${menuOpen ? 'highlight' : ''}`}
              onClick={() => handleTabClick('Profil')}
            >
              Profil
            </li>
            <li
              className={`button transparent-button ${menuOpen ? 'highlight' : ''}`}
              onClick={() => handleTabClick('Paramètres')}
            >
              Paramètres
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        {selectedTab === 'Accueil' && renderAccueil()}
        {selectedTab === 'Profil' && renderProfil()}
        {selectedTab === 'Paramètres' && renderParametres()}
      </div>
    </div>
  );
}

export default BurgerMenuPage;
