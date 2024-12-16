import React from 'react';
import './Credits.css';

function Credits() {
	return (
		<div id="credits">
			<p>&copy; 2024 <a href="https://lucasburlingham.me" target="_blank" rel="noopener noreferrer">Lucas Burlingham</a>, licensed under <a href="https://lucasburlingham.me/LICENSE.md" target="_blank" rel="noopener noreferrer">The Creator's License</a></p>
			<p>Special thanks to:</p>
			<ul>
				<li>tobyj for the <a href="https://codepen.io/tobyj/pen/QjvEex">Christmas Lights</a></li>
				<li>Cahil Foley for <a href="https://github.com/cahilfoley/react-snowfall">react-snowfall</a></li>
			</ul>
		</div>
	);
}

export default Credits;
