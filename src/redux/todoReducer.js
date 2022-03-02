import { ADD_NEW_FOLDER, DELETE_FOLDER, SELECT_FOLDER } from './actions';

const initialState = [{
		select: {}
	},
	{
		folders: []
	}

];

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_FOLDER:
			return [{select: {...state.select}}, {folders: [...state[1].folders, action.payload]}]
		case DELETE_FOLDER:
			const newFolders = state[1].folders.filter(item => item.idx !== action.payload)
			return [{select: {...state.select}}, {folders: [...newFolders]}];
		case SELECT_FOLDER:
			const newSelected = state[1].folders.filter(item => item.idx === action.payload)
			return [{select: {...newSelected}}, {folders: [...state[1].folders]}];
		default:
			return state;
	}
}

const obj = [
	{
		select: {
			id: 1,
			val: 'val./folders',
			todo: [
				{},
				{},
				{},
				{},
			]
		}
	},
	{
		folders: [
			{id: 1, val: '11'},
			{id: 2, val: '22'},
			{id: 3, val: '33'},
			{id: 4, val: '44'},
		]
	}

]