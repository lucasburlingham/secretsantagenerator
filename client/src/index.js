import React from 'react';
import ReactDOM from 'react-dom/client';
import Snowfall from 'react-snowfall'


import './index.css';
import Home from './Home';
import Lights from './Lights';
import Credits from './Credits';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<React.StrictMode>
		<Lights />
		<Home />
		<Snowfall />
		<Credits />
	</React.StrictMode>
);
