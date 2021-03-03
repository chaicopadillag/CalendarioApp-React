import React from 'react';
import { useDispatch } from 'react-redux';
import { uiAbrirModal } from '../../acctions/modalAcctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNewfab = () => {
	const dispatch = useDispatch();

	const handleOpenFab = () => {
		dispatch(uiAbrirModal());
	};
	return (
		<button className="btn btn-primary fab" onClick={handleOpenFab}>
			<FontAwesomeIcon icon={faPlus} />
		</button>
	);
};

export default AddNewfab;
