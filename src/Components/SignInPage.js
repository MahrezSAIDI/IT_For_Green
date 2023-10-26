import React, { useState } from 'react';
import logo from '../img/0_3_1.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import '../css/SignIn.css'

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Gérer la logique de connexion ici (par exemple, envoyer les données au serveur)
    if(email === 'root' && password === 'root'){
      navigate('/BurgerMenuPage');
    } else {
      console.log('error ID');
    }
  }

  return (
    <div className="SignIn">
      <header className="SignIn-header">
        <div>
          <img src={logo} className="SignIn-logo" alt="logo" />
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={handleLogin}>
            Se Connecter
            </Button>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default SignInPage;
