import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import eventoReducer from './eventoReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	evento: eventoReducer,
});
