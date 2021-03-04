import React from 'react';

const Loading = () => {
	return (
		<div className="wrapper bg-white d-flex justify-content-center">
			<div className="text-center d-flex">
				<div className="spinner-border text-primary" role="status"></div>
				<h6 className="d-inline-block ml-2 mt-2">Cargando...</h6>
			</div>
		</div>
	);
};

export default Loading;
