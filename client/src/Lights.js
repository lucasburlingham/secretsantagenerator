import React from 'react';

import './Lights.css';

function Lights() {

	// Get the width of the window
	const width = window.innerWidth;

	// Each light is 10px wide, so divide the width of the window by 10
	const numLights = width / 10;
	
	// Add 4 more lights to the end of the row, just in case
	const lights = [];
	for (let i = 0; i < numLights + 4; i++) {
		lights.push(<li></li>);
	}

	// Return the lights
	return (
		<ul class="lightrope">
			{lights}
		</ul>
	);
}

export default Lights;
