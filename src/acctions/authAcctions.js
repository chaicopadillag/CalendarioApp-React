import swal from 'sweetalert';
import { fetchConToken, fetchSinToken } from '../helpers/fetchAPI';
import { tipos } from '../tipos/tipos';
import { eventoCleanLogout } from './eventosAcctions';

export const authLogin = (correo, contrasenia) => {
	return async (dispatch) => {
		try {
			const response = await fetchSinToken('auth', { correo, contrasenia }, 'POST');
			const json = await response.json();

			if (json.status !== 200) {
				throw {
					status: json.status,
					statusText: json.statusText,
				};
			}

			const { user } = json;

			localStorage.setItem('token', user.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(
				authLoginAction({
					nombre: user.nombre,
					correo: user.correo,
					uid: user.uid,
					token: user.token,
				})
			);
		} catch (error) {
			swal({
				title: 'Error de Autenticación',
				text: error.statusText,
				icon: 'error',
			});
		}
	};
};
export const authRegister = (nombre, correo, contrasenia) => {
	return async (dispatch) => {
		try {
			const response = await fetchSinToken('auth/register', { nombre, correo, contrasenia }, 'POST');
			const json = await response.json();

			if (json.status !== 201) {
				throw {
					status: json.status,
					statusText: json.statusText,
				};
			}

			const { usuario } = json;

			localStorage.setItem('token', usuario.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(
				authRegisterAction({
					nombre: usuario.nombre,
					correo: usuario.correo,
					uid: usuario.uid,
					token: usuario.token,
				})
			);
		} catch (error) {
			swal({
				title: 'Error de Registro',
				text: error.statusText,
				icon: 'error',
			});
		}
	};
};

export const verifyTokenAuth = () => {
	return async (dispatch) => {
		try {
			const response = await fetchConToken('auth/verify-token');
			const json = await response.json();

			if (json.status !== 200) {
				throw {
					status: json.status,
					statusText: json.statusText,
				};
			}

			const { user } = json;

			localStorage.setItem('token', user.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(
				authLoginAction({
					nombre: user.nombre,
					uid: user.uid,
					token: user.token,
				})
			);
		} catch (error) {
			dispatch(authChekingFinishAction());
		}
	};
};
export const authLogout = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch(authLogoutAction());
		dispatch(eventoCleanLogout());
	};
};

const authLogoutAction = () => ({
	type: tipos.authLogout,
});

const authLoginAction = (authUser) => ({
	type: tipos.authLogin,
	payload: authUser,
});

const authRegisterAction = (authUser) => ({
	type: tipos.authRegister,
	payload: authUser,
});

const authChekingFinishAction = () => ({
	type: tipos.authChekingFinish,
});
