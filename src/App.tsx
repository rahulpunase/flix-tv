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
import {SideNavigationAndPage} from "./components/side-navigation-and-page/side-navigation-and-page";


function App() {
	return (
		<React.Fragment>
			<Router>
			<Header/>
				<div className="App container-fluid g-0">
					<main role="main">
						<SideNavigationAndPage/>
					</main>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
