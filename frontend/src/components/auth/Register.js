import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Les mots de passe ne correspondent pas');
    } else {
      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post('/api/users/register', body, config);
        console.log('Token reçu:', res.data.token);
      } catch (err) {
        console.error('Erreur lors de l\'inscription:', err.response.data);
      }
    }
  };

  return (
    <section>
      <h1>Inscription</h1>
      <p>Créez votre compte</p>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nom"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
        <div>
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" value="S'inscrire" />
      </form>
    </section>
  );
};

export default Register;
