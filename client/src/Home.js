import React from 'react';
import logo from './SnowGnome.png';
 
import './Home.css';

function Home() {
  return (
    <div className="Home" >
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Generate your own Secret Santa list
        </p>
        <button
          className="Add-Name"
		  onClick={() => {
			alert('Add Name');
		  }}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default Home;
