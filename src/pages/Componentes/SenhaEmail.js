import React, { useState } from 'react';
import Style from './css/senhaemail.module.css';

const SenhaEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [validationErrors, setValidationErrors] = useState({
        email: [],
        password: [],
        confirmPassword: [],
    });

    const passwordCriteria = [
        { id: 'lowercase', regex: /[a-z]/, label: 'Letra minúscula' },
        { id: 'uppercase', regex: /[A-Z]/, label: 'Letra maiúscula' },
        { id: 'number', regex: /\d/, label: 'Número' },
        { id: 'specialChar', regex: /[@#$%^&+=!]/, label: 'Caractere especial' },
        { id: 'length', regex: /.{10,}/, label: 'Pelo menos 10 caracteres' },
    ];

    const [fulfilledCriteria, setFulfilledCriteria] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        specialChar: false,
        length: false,
    });

    const calculatePasswordStrength = () => {
        let strength = 0;

        passwordCriteria.forEach((criterion) => {
            if (fulfilledCriteria[criterion.id]) {
                strength += 2;
            }
        });

        return strength;
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        passwordCriteria.forEach((criterion) => {
            if (criterion.regex.test(newPassword)) {
                setFulfilledCriteria((prevCriteria) => ({
                    ...prevCriteria,
                    [criterion.id]: true,
                }));
            } else {
                setFulfilledCriteria((prevCriteria) => ({
                    ...prevCriteria,
                    [criterion.id]: false,
                }));
            }
        });

        const strength = calculatePasswordStrength();
        setPasswordStrength(strength);
        updateValidationErrors({ password: newPassword });
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        updateValidationErrors({ confirmPassword: event.target.value });
    };

    const handleEmailBlur = () => {
        validateEmail();
    };

    const handlePasswordBlur = () => {
        validatePassword();
        validateConfirmPassword();
    };

    const handleConfirmPasswordBlur = () => {
        validateConfirmPassword();
    };

    const validateEmail = () => {
        const errors = [];

        if (!email.includes('@')) {
            errors.push('O e-mail deve conter o caractere "@".');
        }

        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            email: errors,
        }));
    };

    const validatePassword = () => {
        const errors = [];

        if (password.length < 10) {
            errors.push('A senha deve ter pelo menos 10 caracteres.');
        }

        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            password: errors,
        }));
    };

    const validateConfirmPassword = () => {
        const errors = [];

        if (password !== confirmPassword) {
            errors.push('As senhas não coincidem.');
        }

        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: errors,
        }));
    };

    const updateValidationErrors = (values) => {
        validateEmail();
        validatePassword();
        validateConfirmPassword();
    };

    return (
        <main className={Style.pageCadastro}>
            <section className={Style.forms1}>
                <form className={Style.nomeSenha}>
                    <input
                        className={Style.email}
                        type="text"
                        placeholder="E-mail:"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                    />
                    <br />

                    <input
                        className={Style.senhaum}
                        type="password"
                        placeholder="Senha:"
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                    />
                    <br/>

                    <label className={Style.confirme}>Confirme sua senha:</label>
                    <br />
                    <input
                        className={Style.senhadois}
                        type="password"
                        placeholder="Senha:"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        onBlur={handleConfirmPasswordBlur}
                    />
                    <br />

                    <div className={Style.passwordCriteria}>
                        {passwordCriteria.map((criterion) => (
                            <div key={criterion.id} className={Style.passwordCriterion}>
                                <input
                                    type="checkbox"
                                    id={criterion.id}
                                    checked={fulfilledCriteria[criterion.id]}
                                    readOnly
                                />
                                <label htmlFor={criterion.id}>{criterion.label}</label>
                            </div>
                        ))}
                    </div>

                    <div className={Style.passwordStrengthBar}>
                        <progress
                            className={Style.passwordStrengthIndicator}
                            value={passwordStrength}
                            max="10"
                        ></progress>
                    </div>

                    {Object.keys(validationErrors).map((fieldName) =>
                        validationErrors[fieldName].length > 0 ? (
                            <div key={fieldName} className={Style.validationError}>
                                <ul className={Style.erro}>
                                    {validationErrors[fieldName].map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null
                    )}
                    <br />
                </form>
            </section>
        </main>
    );
};

export default SenhaEmail;
