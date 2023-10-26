import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import SignInPage from './Components/SignInPage';
import Menu from './Components/Menu';
import SignUpPage from './Components/SignUpPage';
import MaConsommation from './Components/MaConsommation'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignInPage" element={<SignInPage/>} />
          <Route path="/SignUpPage" element={<SignUpPage/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/MaConsommation" element={<MaConsommation/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
