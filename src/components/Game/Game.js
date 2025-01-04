import React, { useState } from 'react';
import Field from '../Field/Field';
import Information from '../Information/Information';

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
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
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
			/>
			<button onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

export default Game;
