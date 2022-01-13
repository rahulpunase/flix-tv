import React from 'react';
import './router-configuration.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import HomePage from "../../pages/home/home-page";

const RouterConfiguration = () => {
	return (
		<div className='router-configuration-component'>
			<Switch>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</div>
	)
}

export {RouterConfiguration};
