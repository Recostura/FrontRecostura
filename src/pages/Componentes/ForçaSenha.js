import React, { useState } from 'react';
import Style from './css/ForçaSenha.module.css';

const PasswordStrength = () => {
 const [password, setPassword] = useState('');

 const handleChange = (e) => {
    setPassword(e.target.value);
 };

 const calculatePasswordStrength = (password) => {
    const passwordLength = password.length;

    if (passwordLength === 0) {
      return 0;
    }

    const capitalLetters = password.match(/[A-Z]/g)  ||[];
    const smallLetters = password.match(/[a-z]/g)  ||[];
    const numbers = password.match(/[0-9]/g)  ||[];
    const specialCharacters = password.match(/[!@#$%^&*(),.?":{}|<>]/g)  ||[];

    let strength = 0;

    if (passwordLength > 8) {
      strength += 1;
    }

    if (capitalLetters.length > 0) {
      strength += 1;
    }

    if (smallLetters.length > 0) {
      strength += 1;
    }

    if (numbers.length > 0) {
      strength += 1;
    }

    if (specialCharacters.length > 0) {
      strength += 1;
    }

    return strength;
 };

 const passwordStrength = calculatePasswordStrength(password);

 return (
    <div className={Style.password}>
      <input type="password" placeholder='Senha:' value={password} onChange={handleChange} />
      <progress className={Style.identificador} value={passwordStrength} max="5" />
      <div>
        {passwordStrength === 0 && <p>Senha Fraca</p>}
        {passwordStrength === 1 && <p>Senha Fraca</p>}
        {passwordStrength === 2 && <p>Senha Fraca</p>}
        {passwordStrength === 3 && <p>Senha Fraca</p>}
        {passwordStrength === 4 && <p>Senha Fraca</p>}
        {passwordStrength === 5 && <p>Senha Fraca</p>}
      </div>
    </div>
 );
};

export default PasswordStrength;
