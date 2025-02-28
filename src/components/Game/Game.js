import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../selectors/selectors';
import Field from '../Field/Field';
import Information from '../Information/Information';
import { restartGame } from '../../action';

const Game = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const handleRestart = () => {
		dispatch(restartGame());
	};

	return (
		<div>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				field={field}
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
			/>
			<button onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

export default Game;
