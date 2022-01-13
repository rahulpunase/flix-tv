import React from 'react';
import './router-configuration.scss';
import {
	Switch,
	Route,
} from "react-router-dom";
import HomePage from "../../pages/home/home-page";

const RouterConfiguration = () => {
	return (
		<div className='router-configuration-component'>
			<Switch>
				<Route exact={true} path="/">
					<HomePage />
				</Route>
			</Switch>
		</div>
	)
}

export {RouterConfiguration};
