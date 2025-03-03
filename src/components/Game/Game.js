import React from 'react';
import { useDispatch } from 'react-redux';
import Field from '../Field/Field';
import Information from '../Information/Information';
import { restartGame } from '../../action';

const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(restartGame());
	};

	return (
		<div>
			<Information />
			<Field />
			<button onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

export default Game;
