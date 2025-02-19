import React, { useState, useEffect } from 'react';
import Field from '../Field/Field';
import Information from '../Information/Information';
import store from '../../store';
import { restartGame } from '../../action';

const Game = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const handleRestart = () => {
		store.dispatch(restartGame());
	};

	return (
		<div>
			<Information
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
				isDraw={state.isDraw}
			/>
			<Field
				field={state.field}
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
			/>
			<button onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

export default Game;
