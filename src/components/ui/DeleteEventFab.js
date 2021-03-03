import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { eventoDelete } from '../../acctions/eventosAcctions';

const DeleteEventFab = () => {
	const dispatch = useDispatch();

	const handleDeleteEvento = () => {
		dispatch(eventoDelete());
	};

	return (
		<button className="btn btn-danger fabDelete" onClick={handleDeleteEvento}>
			<FontAwesomeIcon icon={faTrash} />
		</button>
	);
};

export default DeleteEventFab;
