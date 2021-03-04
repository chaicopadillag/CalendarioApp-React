import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { verifyTokenAuth } from '../acctions/authAcctions';
import CalendarView from '../components/calendar/CalendarView';
import { AuthRouter } from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
	const dispatch = useDispatch();
	const { checking, authUser } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(verifyTokenAuth());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute path="/auth" component={AuthRouter} isLogin={!!authUser?.uid} />
				<PrivateRoute exact path="/" component={CalendarView} isLogin={!!authUser?.uid} />
				<Redirect to="/auth" />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
