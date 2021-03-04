import swal from 'sweetalert';
import { fetchConToken } from '../helpers/fetchAPI';
import { formatearFechaEventos } from '../helpers/formatearFechaEventos';
import { tipos } from '../tipos/tipos';

export const crearNuevoEvento = (newEvento) => {
	return async (dispatch, getState) => {
		try {
			const { uid, nombre } = getState().auth.authUser;

			const resp = await fetchConToken('events', newEvento, 'POST');
			const json = await resp.json();

			if (json.status !== 201) {
				throw {
					status: json.status,
					statusText: json.statusText,
				};
			}
			const { evento } = json;

			dispatch(
				crearNuevoEventoAcction({
					...newEvento,
					id: evento.id,
					user: {
						_id: uid,
						nombre: nombre,
					},
				})
			);

			swal({
				title: 'Registro exítoso',
				text: json.statusText,
				icon: 'success',
			});
		} catch (error) {
			swal({
				title: 'Error de Registro',
				text: error.statusText,
				icon: 'error',
			});
		}
	};
};

export const cargarTodosEventos = () => {
	return async (dispatch) => {
		try {
			const resp = await fetchConToken('events');
			const json = await resp.json();
			if (json.status !== 201) {
				throw {
					status: json.status,
					statusText: json.statusText,
				};
			}
			const eventos = formatearFechaEventos(json.eventos);
			dispatch(cargarTodosEventosAcction(eventos));
		} catch (error) {
			swal({
				title: 'Error en cargar datos',
				text: error.statusText,
				icon: 'error',
			});
		}
	};
};

export const eventoUpdate = (event) => {
	return async (dispatch) => {
		try {
			const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
			const json = await resp.json();
			if (json.status !== 201) {
				throw {
					status: json.status,
					statusText: json.statusText,
				};
			}
			dispatch(eventoUpdateAction(event));

			swal({
				title: 'El evento se actualizó correctamente',
				text: json.statusText,
				icon: 'success',
			});
		} catch (error) {
			swal({
				title: 'Error en actualizar',
				text: error.statusText,
				icon: 'error',
			});
		}
	};
};

export const eventoDelete = () => {
	return async (dispatch, getState) => {
		try {
			const { id } = getState().evento.eventoActivo;
			const resp = await fetchConToken(`events/${id}`, {}, 'DELETE');
			const json = await resp.json();

			if (json.status !== 201) {
				throw {
					status: json.status,
					statusText: json.statusText,
				};
			}

			dispatch(eventoDeleteAcction());

			swal({
				title: 'Eliminación correcta',
				text: json.statusText,
				icon: 'success',
			});
		} catch (error) {
			swal({
				title: 'Error al eliminar',
				text: error.statusText,
				icon: 'error',
			});
		}
	};
};

export const eventoCleanLogout = () => ({ type: tipos.eventCleanLogout });

const cargarTodosEventosAcction = (eventos) => ({
	type: tipos.eventGetAll,
	payload: eventos,
});

const crearNuevoEventoAcction = (evento) => ({
	type: tipos.eventoCrear,
	evento,
});

export const setEventoActivo = (evento) => ({
	type: tipos.eventoActivo,
	evento,
});

export const enventoClear = () => ({
	type: tipos.eventoNull,
});
const eventoUpdateAction = (evento) => ({
	type: tipos.eventoUpdate,
	evento,
});
const eventoDeleteAcction = () => ({ type: tipos.eventoDelete });
