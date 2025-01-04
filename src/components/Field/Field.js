import React from 'react';
import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';

const Field = ({
	field,
	currentPlayer,
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
	isGameEnded,
}) => {
	const handleClick = (index) => {
		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			const isWin = checkWin(newField, currentPlayer);
			if (isWin) {
				setIsGameEnded(true);
				return;
			}

			const isDraw = checkDraw(newField);
			if (isDraw) {
				setIsDraw(true);
				return;
			}

			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	const checkWin = (field, player) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];

		for (let pattern of WIN_PATTERNS) {
			if (pattern.every((index) => field[index] === player)) {
				return true;
			}
		}
		return false;
	};

	const checkDraw = (field) => {
		return field.every((cell) => cell !== '');
	};

	return <FieldLayout field={field} handleClick={handleClick} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentPlayer: PropTypes.string.isRequired,
	setField: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};

export default Field;
