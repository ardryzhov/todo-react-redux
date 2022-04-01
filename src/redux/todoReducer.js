import { ADD_NEW_FOLDER, DELETE_FOLDER, SELECT_FOLDER, ADD_TODO, UPDATE_FOLDER_TITLE, DONE_TODO, DELETE_TODO } from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
	{
		id: uuidv4(),
		val: 'Sample',
		color: '#C9D1D3',
		isOpen: true,
		todos: [
			{title: 'Learn React', id: uuidv4(), isDone: false },
			{title: 'Learn Redux', id: uuidv4(), isDone: false },
			{title: 'Learn nextJs', id: uuidv4(), isDone: false },
		]
	}
]

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_FOLDER:
			return [...state, {...action.payload, isOpen: false, todos: []}]
		
		case DELETE_FOLDER:
			const newState = state.filter(item => item.id !== action.payload);
			return [...newState]

		case SELECT_FOLDER: 
			const openFolder = state.map(item => {
				item.isOpen = false;
				if (item.id === action.payload) {
					item.isOpen = true;
				}
				return item
			});
			return [...openFolder]

		case UPDATE_FOLDER_TITLE:
			const updateItem = state.map(item => {
				if (item.id === action.payload.id) {
					item.val = action.payload.title
				}
				return item;
			}) 
			return [...updateItem]

		case ADD_TODO:
			const selectFolder = state.filter(item => {
				if (item.id === action.payload.id) {
					item.todos = [...item.todos, {...action.payload.todo}]
				}
				return item
			});
			return [...selectFolder]

		case DONE_TODO:
			const changeTodo = state.filter(item => {
				if (item.id === action.payload.todoListId) {
					item.todos = [...action.payload.newArr];
				}
				return item;
			});
	
			return [...changeTodo];

		case DELETE_TODO:
			const notDeletedTodo = state.filter(item => {
				if (item.id === action.payload.todoListId) {
					console.log('state.id: ', item.id);
					console.log('action payload: ', action.payload);
					item.todos = [...action.payload.newArr];
				}
				return item;
			});

			return [...notDeletedTodo]

		default:
			return state;
	}
}



