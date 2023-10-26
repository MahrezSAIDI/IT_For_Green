import React, { useState } from 'react';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Gérer la logique d'inscription ici (par exemple, envoyer les données au serveur)
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
  }

  return (
    <div>
      <h2>Page d'Inscription</h2>
      <form>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignUp}>S'Inscrire</button>
      </form>
    </div>
  );
}

export default SignUpPage;
