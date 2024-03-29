import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [activePlayer, setActivePlayer] = useState('X');

	function handleSelectSquare() {
		setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? '0' : 'X'));
		setGameTurns();
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player initalName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
					<Player initalName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
				<Log />
			</div>
			LOG
		</main>
	);
}

export default App;
