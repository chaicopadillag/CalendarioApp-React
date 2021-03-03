import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
	return (
		<div className="navbar navbar-dark bg-dark mb-4">
			<span className="text-warning">Code</span>
			<button className="btn btn-warning">
				<FontAwesomeIcon icon={faSignOutAlt} />
				Salir
			</button>
		</div>
	);
};

export default TopBar;
