import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { uiCerrarModal } from '../../acctions/modalAcctions';
import { crearNuevoEvento, enventoClear, eventoUpdate } from '../../acctions/eventosAcctions';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};
Modal.setAppElement('#root');

const fechaHoy = moment().minutes(0).seconds(0).add(1, 'hours');
const fechaHoyMasUnaHora = fechaHoy.clone().add(1, 'hours');

const ModalCalendar = () => {
	const [fechaInicial, setFechaInicial] = useState(fechaHoy.toDate());
	const [fechaFinal, setFechaFinal] = useState(fechaHoyMasUnaHora.toDate());
	const [isTituloInvalid, setIsTituloInvalid] = useState(false);

	const { estadoModal } = useSelector((state) => state.ui);
	const { eventoActivo } = useSelector((state) => state.evento);

	const dispatch = useDispatch();

	const eventInitial = {
		title: '',
		note: '',
		start: fechaHoy.toDate(),
		end: fechaHoyMasUnaHora.toDate(),
	};
	const [formValues, setFormValues] = useState(eventInitial);

	const { title, note } = formValues;

	useEffect(() => {
		if (eventoActivo) {
			setFormValues(eventoActivo);
			setFechaInicial(eventoActivo.start);
			setFechaFinal(eventoActivo.end);
		} else {
			setFormValues(eventInitial);
		}
	}, [eventoActivo, setFormValues]);

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
		if (target.name === 'title') {
			setIsTituloInvalid(false);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const momentInicial = moment(fechaInicial);
		const momentFinal = moment(fechaFinal);
		if (momentInicial.isSameOrAfter(momentFinal)) {
			swal('Error!', 'La fecha final del evento debe ser mayor a la de fecha fncial', 'warning');
			return;
		}
		if (title.trim().length < 2) {
			setIsTituloInvalid(true);
			return;
		}
		if (eventoActivo) {
			dispatch(eventoUpdate(formValues));
		} else {
			dispatch(
				crearNuevoEvento({
					...formValues,
					start: fechaInicial,
					end: fechaFinal,
				})
			);
		}
		closeModal();
	};
	const closeModal = () => {
		setFormValues(eventInitial);
		setFechaInicial(fechaHoy.toDate());
		setFechaFinal(fechaHoyMasUnaHora.toDate());
		dispatch(enventoClear());
		dispatch(uiCerrarModal());
	};

	const handleFechaInicio = (e) => {
		setFechaInicial(e);
		setFormValues({
			...formValues,
			fechaFinal: e,
		});
	};
	const handleFechaFin = (e) => {
		setFechaFinal(e);
		setFormValues({
			...formValues,
			fechaFinal: e,
		});
	};
	return (
		<Modal
			isOpen={estadoModal}
			// onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={300}
			className="modal"
			overlayClassName="modal-fondo">
			<h1> {eventoActivo ? 'Editando evento' : 'Nuevo evento'} </h1>
			<hr />
			<form className="container" method="POST" onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Fecha y hora inicio</label>
					<DateTimePicker className="form-text form-control" onChange={handleFechaInicio} value={fechaInicial} name="start" />
				</div>

				<div className="form-group">
					<label>Fecha y hora fin</label>
					<DateTimePicker className="form-text form-control" onChange={handleFechaFin} value={fechaFinal} minDate={fechaInicial} name="end" />
				</div>

				<hr />
				<div className="form-group">
					<label>Titulo y notas</label>
					<input
						type="text"
						className={`form-control ${isTituloInvalid && 'is-invalid'}`}
						placeholder="Título del evento"
						name="title"
						autoComplete="off"
						value={title}
						onChange={handleInputChange}
					/>
					<small id="emailHelp" className="form-text text-muted">
						Una descripción corta
					</small>
				</div>

				<div className="form-group">
					<textarea type="text" className="form-control" placeholder="Notas" rows="5" name="note" value={note} onChange={handleInputChange}></textarea>
					<small id="emailHelp" className="form-text text-muted">
						Información adicional
					</small>
				</div>

				<button type="submit" className="btn btn-outline-primary btn-block">
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};

export default ModalCalendar;
