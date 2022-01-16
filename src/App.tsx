import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "./components/header/header";
import {
	BrowserRouter as Router,
} from "react-router-dom";
import {SideNavigationAndPage} from "./components/side-navigation-and-page/side-navigation-and-page";
import {Provider, useDispatch, useSelector} from 'react-redux';
import {IStore, store} from "./redux/store/store";
import {getConfigurations, getCountries} from "./http/http-handler";
import {
	IAppConfiguration,
	ICountry
} from "./redux/reducers/app-configuration/app-configuration.reducer";
import {_initiateApp, _initiateCountries} from "./redux/reducers/app-configuration/app-configuration.action";
import {forkJoin} from "rxjs";


function App() {
	const dispatch = useDispatch();
	const store = useSelector((store: IStore) => store);
	useEffect(() => {
		forkJoin(
			[getConfigurations<IAppConfiguration>(), getCountries<Array<ICountry>>()]
		).subscribe(([appConfiguration, countries]) => {
			dispatch(_initiateApp(appConfiguration));
			dispatch(_initiateCountries(countries))
		})
	}, []);
	return (
		<React.Fragment>
			{store.appConfiguration.initialized && <Router>
				<Header/>
				<div className="App container-fluid g-0">
					<main role="main">
						<SideNavigationAndPage/>
					</main>
				</div>
			</Router>}
		</React.Fragment>
	);
}

export default App;
