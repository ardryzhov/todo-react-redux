import { todoReducer } from './todoReducer';
import { createStore, combineReducers } from 'redux';

export const rootReducer = combineReducers({
	todo: todoReducer
});

export const store = createStore(rootReducer);