import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/layout/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/register">Inscription</Link>
      </li>
      <li>
        <Link to="/login">Connexion</Link>
      </li>
    </ul>
  </nav>
);

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <section className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
