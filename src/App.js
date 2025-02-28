import React from 'react';
import { Provider } from 'react-redux';
import Game from './components/Game/Game';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Game />
			</div>
		</Provider>
	);
};

export default App;
