import { todoReducer } from './todoReducer';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

export const rootReducer = combineReducers({
	todo: todoReducer
});

export const store = createStore(rootReducer, composeWithDevTools());