export const ADD_NEW_FOLDER = 'ADD_NEW_FOLDER';
export const DELETE_FOLDER = 'DELETE_FOLDER';
export const SELECT_FOLDER = 'SELECT_FOLDER';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_FOLDER_TITLE = 'UPDATE_FOLDER_TITLE';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO'

export function addFolderAction(payload) {
	return ({type: ADD_NEW_FOLDER, payload})
};

export function deleteFolderAction(payload) {
	return ({type: DELETE_FOLDER, payload})
}

export function selectFolderAction(payload) {
	return ({type: SELECT_FOLDER, payload})
}

export function addTodoAction(payload) {
	return ({type: ADD_TODO, payload})
}

export function updateTitleFolderAction(payload) {
	return ({type: UPDATE_FOLDER_TITLE, payload})
}

export function changeDoneTodoAction(payload) {
	return ({type: DONE_TODO, payload})
};

export function deleteTodoAction(payload) {
	return ({type: DELETE_TODO, payload})
};

