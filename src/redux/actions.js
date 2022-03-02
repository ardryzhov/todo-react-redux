export const ADD_NEW_FOLDER = 'ADD_NEW_FOLDER';
export const DELETE_FOLDER = 'DELETE_FOLDER';
export const SELECT_FOLDER = 'SELECT_FOLDER';

export function addFolderAction(payload) {
	return ({type: ADD_NEW_FOLDER, payload})
};

export function deleteFolderAction(payload) {
	return ({type: DELETE_FOLDER, payload})
}

export function selectFolderAction(payload) {
	return ({type: SELECT_FOLDER, payload})
}