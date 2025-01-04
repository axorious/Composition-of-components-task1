import React from 'react';

const FieldLayout = ({ field, handleClick }) => (
	<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>
		{field.map((cell, index) => (
			<button
				key={index}
				onClick={() => handleClick(index)}
				style={{ width: '100px', height: '100px' }}
			>
				{cell}
			</button>
		))}
	</div>
);

export default FieldLayout;
