import React from 'react';
import { useSelector } from 'react-redux';
import {
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../selectors/selectors';
import InformationLayout from './InformationLayout';

const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	let status;
	if (isGameEnded) {
		status = isDraw ? 'Ничья!' : `Победил игрок ${currentPlayer}!`;
	} else {
		status = `Сейчас ходит: ${currentPlayer}`;
	}

	return <InformationLayout status={status} />;
};

export default Information;
