import { tipos } from '../tipos/tipos';

export const crearNuevoEvento = (evento) => ({
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
export const eventoUpdate = (evento) => ({
	type: tipos.eventoUpdate,
	evento,
});
export const eventoDelete = () => ({ type: tipos.eventoDelete });
