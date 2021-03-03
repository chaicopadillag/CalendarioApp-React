import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CalendarView from '../components/calendar/CalendarView';
import { AuthRouter } from './AuthRouter';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/auth" component={AuthRouter} />
				<Route exact path="/" component={CalendarView} />
				<Redirect to="/auth" />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
