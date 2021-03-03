import { tipos } from '../tipos/tipos';

const inicialEstado = {
	estadoModal: false,
};
const uiReducer = (estadoUI = inicialEstado, accion) => {
	switch (accion.type) {
		case tipos.uiOpenModal:
			return {
				...estadoUI,
				estadoModal: true,
			};
		case tipos.uiCloseModal:
			return {
				...estadoUI,
				estadoModal: false,
			};

		default:
			return estadoUI;
	}
};

export default uiReducer;
