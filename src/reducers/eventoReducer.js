import moment from 'moment';
import { tipos } from '../tipos/tipos';

const initialEstado = {
	eventos: [
		{
			id: new Date().getTime(),
			title: 'Cumpleaños del Jefe',
			start: moment().toDate(),
			end: moment().add(2, 'hours').toDate(),
			bgcolor: '#2f2f2f',
			user: {
				uid: 'asdasd',
				name: 'Code',
			},
		},
	],
	eventoActivo: null,
};

const eventoReducer = (eventoEstado = initialEstado, accion) => {
	switch (accion.type) {
		case tipos.eventoActivo:
			return {
				...eventoEstado,
				eventoActivo: accion.evento,
			};
		case tipos.eventoCrear:
			return {
				...eventoEstado,
				eventos: [...eventoEstado.eventos, accion.evento],
			};
		case tipos.eventoUpdate:
			return {
				...eventoEstado,
				eventos: eventoEstado.eventos.map((event) => (event.id === accion.evento.id ? accion.evento : event)),
			};
		case tipos.eventoDelete:
			return {
				...eventoEstado,
				eventos: eventoEstado.eventos.filter((event) => event.id !== eventoEstado.eventoActivo.id),
				eventoActivo: null,
			};
		case tipos.eventoNull:
			return { ...eventoEstado, eventoActivo: null };
		default:
			return eventoEstado;
	}
};

export default eventoReducer;
