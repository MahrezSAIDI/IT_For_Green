import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import logo from '../img/0_3_1.png';
import '../App.css';
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <div className="App">
        <header className="App-header">
            <div>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
            <div className="button-button">
                <Button variant="outline-primary">Inscription</Button>
            </div>
            <div>
                <Link to='./SignInPage'>
                    <Button variant="outline-secondary">Connexion</Button>
                </Link>
            </div>
            </div>
        </header>
    </div>
  );
}

export default HomePage;