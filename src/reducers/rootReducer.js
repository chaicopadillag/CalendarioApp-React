import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import eventoReducer from './eventoReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	evento: eventoReducer,
	auth: authReducer,
});
