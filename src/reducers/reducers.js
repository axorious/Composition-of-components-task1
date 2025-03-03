import { initialState } from '../store';

function gameReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_FIELD':
			return { ...state, field: action.payload };
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: action.payload };
		case 'SET_IS_GAME_ENDED':
			return { ...state, isGameEnded: action.payload };
		case 'SET_IS_DRAW':
			return { ...state, isDrawl: action.payload };
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
}

export default gameReducer;
