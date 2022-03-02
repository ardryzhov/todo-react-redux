import { ADD_NEW_FOLDER } from './actions';

const initialState = [];

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_FOLDER:
			return [...state, {...action.payload}];
		default:
			return state;
	}
}