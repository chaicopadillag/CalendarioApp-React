import { faEnvelope, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { authRegister } from '../../acctions/authAcctions';
import useForm from '../../hooks/useForm';

const RegisterView = () => {
	const dispatch = useDispatch();
	const [formValues, handleChange] = useForm({
		nombre: '',
		correo: '',
		contrasenia: '',
		contrasenia2: '',
	});

	const { nombre, correo, contrasenia, contrasenia2 } = formValues;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (contrasenia !== contrasenia2) {
			swal({
				title: 'Error de Registro',
				text: 'Las contraseñas no coenciden',
				icon: 'warning',
			});
			return;
		}
		dispatch(authRegister(nombre, correo, contrasenia));
	};
	return (
		<div className="wrapper bg-white">
			<div className="h2 text-center">Calendario App</div>
			<div className="h4 text-muted text-center pt-2">Ingrese tus datos para Registrarte</div>
			<form className="pt-3" method="POST" onSubmit={handleSubmit}>
				<div className="form-group py-2">
					<div className="input-field">
						<FontAwesomeIcon icon={faUser} />
						<input type="text" placeholder="Tu nombre" required className="" name="nombre" value={nombre} onChange={handleChange} />
					</div>
				</div>
				<div className="form-group py-2">
					<div className="input-field">
						<FontAwesomeIcon icon={faEnvelope} />
						<input type="email" placeholder="Correo electrónico" required className="" name="correo" value={correo} onChange={handleChange} />
					</div>
				</div>
				<div className="form-group py-1 pb-2">
					<div className="input-field">
						<FontAwesomeIcon icon={faLock} />
						<input type="password" placeholder="Ingresa tu contraseña" required className="" name="contrasenia" value={contrasenia} onChange={handleChange} />
					</div>
				</div>
				<div className="form-group py-1 pb-2">
					<div className="input-field">
						<FontAwesomeIcon icon={faKey} />
						<input type="password" placeholder="Repite tu contraseña" required className="" name="contrasenia2" value={contrasenia2} onChange={handleChange} />
					</div>
				</div>
				<button className="btn btn-block text-center my-3" type="submit">
					Registrarse
				</button>
				<div className="text-center pt-3 text-muted">
					¿Ya tienes una cuenta? <Link to="/auth/login">Inicia sesión</Link>
				</div>
			</form>
		</div>
	);
};

export default RegisterView;
