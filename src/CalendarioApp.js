import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './routers/AppRouter';
import { HashRouter } from 'react-router-dom';

const CalendarioApp = () => {
	return (
		<Provider store={store}>
			<HashRouter>
				<AppRouter />
			</HashRouter>
		</Provider>
	);
};

export default CalendarioApp;
