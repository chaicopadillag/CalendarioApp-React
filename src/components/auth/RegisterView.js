import { faEnvelope, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterView = () => {
	return (
		<div class="wrapper bg-white">
			<div class="h2 text-center">Calendario App</div>
			<div class="h4 text-muted text-center pt-2">Ingrese tus datos para Registrarte</div>
			<form class="pt-3" method="POST">
				<div class="form-group py-2">
					<div class="input-field">
						<FontAwesomeIcon icon={faUser} />
						<input type="text" placeholder="Tu nombre" required class="" />
					</div>
				</div>
				<div class="form-group py-2">
					<div class="input-field">
						<FontAwesomeIcon icon={faEnvelope} />
						<input type="email" placeholder="Correo electrónico" required class="" />
					</div>
				</div>
				<div class="form-group py-1 pb-2">
					<div class="input-field">
						<FontAwesomeIcon icon={faLock} />
						<input type="password" placeholder="Ingresa tu contraseña" required class="" />
					</div>
				</div>
				<div class="form-group py-1 pb-2">
					<div class="input-field">
						<FontAwesomeIcon icon={faKey} />
						<input type="password" placeholder="Repite tu contraseña" required class="" />
					</div>
				</div>
				<button class="btn btn-block text-center my-3" type="submit">
					Registrarse
				</button>
				<div class="text-center pt-3 text-muted">
					¿Ya tienes una cuenta? <Link to="/auth/login">Inicia sesión</Link>
				</div>
			</form>
		</div>
	);
};

export default RegisterView;
