import { createStore } from 'redux';
import gameReducer from './reducers/reducers';

export const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	isGameEnded: false,
	isDrawl: false,
};

const store = createStore(gameReducer);

export default store;
