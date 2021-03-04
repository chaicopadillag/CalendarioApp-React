import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../acctions/authAcctions';

const TopBar = () => {
	const dispatch = useDispatch();
	const { authUser } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(authLogout());
	};

	return (
		<div className="navbar navbar-dark bg-dark mb-4">
			<span className="text-warning">{authUser?.nombre}</span>
			<button className="btn btn-warning" onClick={handleLogout}>
				<FontAwesomeIcon icon={faSignOutAlt} />
				Salir
			</button>
		</div>
	);
};

export default TopBar;
