import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginView = () => {
	return (
		<div class="wrapper bg-white">
			<div class="h2 text-center">Calendario App</div>
			<div class="h4 text-muted text-center pt-2">Ingrese tus datos para iniciar sesión</div>
			<form class="pt-3" method="POST">
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
				<div class="d-flex align-items-start">
					<div class="remember">
						<label class="option text-muted">
							Recuérdame
							<input type="radio" name="radio" /> <span class="checkmark"></span>
						</label>
					</div>
					<div class="ml-auto">
						<a href="/auth/recovery" id="forgot">
							¿Has olvidado tu contraseña?
						</a>
					</div>
				</div>
				<button class="btn btn-block text-center my-3" type="submit">
					Iniciar sesión
				</button>
				<div class="text-center pt-3 text-muted">
					¿No es un miembro? <Link to="/auth/register">Regístrate</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginView;
