import { ADD_NEW_FOLDER, DELETE_FOLDER, SELECT_FOLDER, ADD_TODO, UPDATE_FOLDER_TITLE, DONE_TODO } from './actions';

const initialState = [
	{
		id: 4004,
		val: 'Sample',
		color: '#C9D1D3',
		isOpen: true,
		todos: [
			{title: 'Learn React', id: 4001, isDone: false },
			{title: 'Learn Redux', id: 4002, isDone: false },
			{title: 'Learn nextJs', id: 4003, isDone: false },
		]
	}
]

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_FOLDER:
			// console.log(state[0])
			// console.log('state.select >>', state[0].select)
			//TODO: При добавлении папки разворачивается старый селект, который пустой - заменить
			return [...state, {...action.payload, isOpen: false, todos: []}]
			// return [{select: {...state[0].select}}, {folders: [...state[1].folders, action.payload]}]
		
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

			
		// case DELETE_FOLDER:
		// 	const newFolders = state[1].folders.filter(item => item.idx !== action.payload);
		// 	// const ob = state[0].select.idx === action.payload ? 
		// 	// const i = state[1].folders.findIndex(id => id.idx === action.payload);
		// 	const sampleFolders = action.payload === 4004 ? state[1].folders[1] : newFolders;
		// 	const sampleSelect = state[0].select[0].idx === action.payload ? initialState[0].select : state[0].select
		// 	// const next = state[0].select[0].idx === action.payload ? state[0].select : state[0].select[0];
		// 	// console.log('select>> :', next)
		// 	// console.log('prev >>', prev)
		// 	// console.log('idx', state[0].select);
		// 	// console.log('payload', action.payload)
		// 	return [{select: {...sampleSelect}}, {folders: [...sampleFolders]}];
		// case SELECT_FOLDER:
		// 	console.log('payload: ', action.payload);
		// 	console.log('state[1].folders: ', state[1].folders);
		// 	const newSelected = state[1].folders.filter(item => item.idx === action.payload);
		// 	console.log('new selected: ', newSelected)
		// 	// console.log(newSelected)
		// 	return [{select: {...newSelected}}, {folders: [...state[1].folders]}];
		// case ADD_TODO:
		// 	const addTodoFolder = state[1].folders.filter(item => item.idx === action.payload.idx);
		// 	// console.log(addTodoFolder);
		// 	// console.log(action.payload)
		// 	return [{select: {...state[0].select}}, {folders: [{...state[1].folders, todo: [...action.payload.todos]}]}];
		// case UPDATE_FOLDER_TITLE:
		// 	const { idx, title } = action.payload;
		// 	const selectedFolder = state[1].folders.filter(item => item.idx === idx);
		// 	// const store = state[0].select[0];
		// 	// console.log('store >>', store)
		// 	// console.log('selected >>>', selectedFolder);
		// 	// console.log('folders >> ', state[0].select)
		// 	console.log(selectedFolder)
		// 	selectedFolder[0].val = title;
		// 	return [{select: {...selectedFolder}}, {folders: [...state[1].folders]}];
		default:
			return state;
	}
}



