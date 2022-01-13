import React from 'react';
import './App.scss';
import {RouterConfiguration} from './components/router-configuration/router-configuration';
import {Header} from "./components/header/header";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


function App() {
	return (
		<div className="router">
			<Router>
				<div className="App container-fluid g-0">
					<Header/>
					<RouterConfiguration/>
				</div>
			</Router>
		</div>
	);
}

export default App;
