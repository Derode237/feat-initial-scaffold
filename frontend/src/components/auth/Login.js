import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(user);
      const res = await axios.post('/api/users/login', body, config);
      console.log('Token reçu:', res.data.token);
    } catch (err) {
      console.error('Erreur lors de la connexion:', err.response.data);
    }
  };

  return (
    <section>
      <h1>Connexion</h1>
      <p>Connectez-vous à votre compte</p>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            placeholder="Adresse Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" value="Se connecter" />
      </form>
    </section>
  );
};

export default Login;
