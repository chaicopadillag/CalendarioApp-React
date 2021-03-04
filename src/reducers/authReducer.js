import { tipos } from '../tipos/tipos';

const initAuth = {
	checking: true,
};
const authReducer = (authStado = initAuth, accion) => {
	switch (accion.type) {
		case tipos.authLogin:
			return {
				...authStado,
				checking: false,
				authUser: accion.payload,
			};

		case tipos.authRegister:
			return {
				...authStado,
				checking: false,
				authUser: accion.payload,
			};

		case tipos.authChekingFinish:
			return {
				...authStado,
				checking: false,
				authUser: null,
			};
		case tipos.authLogout:
			return {
				checking: false,
			};

		default:
			return authStado;
	}
};

export default authReducer;
