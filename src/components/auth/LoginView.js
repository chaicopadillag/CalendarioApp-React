import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogin } from '../../acctions/authAcctions';
import useForm from '../../hooks/useForm';

const LoginView = () => {
	const dispatch = useDispatch();

	const [formValues, handleChange] = useForm({
		correo: '',
		contrasenia: '',
	});

	const { correo, contrasenia } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(authLogin(correo, contrasenia));
	};

	return (
		<div className="wrapper bg-white">
			<div className="h2 text-center">Calendario App</div>
			<div className="h4 text-muted text-center pt-2">Ingrese tus datos para iniciar sesión</div>
			<form className="pt-3" method="POST" onSubmit={handleSubmit}>
				<div className="form-group py-2">
					<div className="input-field">
						<FontAwesomeIcon icon={faEnvelope} />
						<input type="email" placeholder="Correo electrónico" required className="" name="correo" onChange={handleChange} value={correo} />
					</div>
				</div>
				<div className="form-group py-1 pb-2">
					<div className="input-field">
						<FontAwesomeIcon icon={faLock} />
						<input type="password" placeholder="Ingresa tu contraseña" required className="" name="contrasenia" onChange={handleChange} value={contrasenia} />
					</div>
				</div>
				<div className="d-flex align-items-start">
					<div className="remember">
						<label className="option text-muted">
							Recuérdame
							<input type="radio" name="radio" /> <span className="checkmark"></span>
						</label>
					</div>
					<div className="ml-auto">
						<a href="/auth/recovery" id="forgot">
							¿Has olvidado tu contraseña?
						</a>
					</div>
				</div>
				<button className="btn btn-block text-center my-3" type="submit">
					Iniciar sesión
				</button>
				<div className="text-center pt-3 text-muted">
					¿No es un miembro? <Link to="/auth/register">Regístrate</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginView;
