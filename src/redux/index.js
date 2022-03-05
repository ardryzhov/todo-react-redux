import { todoReducer } from './todoReducer';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


export const rootReducer = combineReducers({
	todo: todoReducer
});

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const store = createStore(rootReducer, composeWithDevTools());
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);