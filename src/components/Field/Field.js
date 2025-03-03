import React from 'react';
import FieldLayout from './FieldLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setField, setCurrentPlayer, setIsGameEnded, setIsDraw } from '../../action';
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
} from '../selectors/selectors';

const Field = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const handleClick = (index) => {
		if (field[index] === '' && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			dispatch(setField(newField));

			const isWin = checkWin(newField, currentPlayer);
			if (isWin) {
				dispatch(setIsGameEnded(true));
				return;
			}

			const isDraw = checkDraw(newField);
			if (isDraw) {
				dispatch(setIsDraw(true));
				return;
			}

			dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
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

export default Field;
