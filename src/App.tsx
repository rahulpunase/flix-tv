import React from 'react';
import './App.scss';
import {Header} from "./components/header/header";
import {
	BrowserRouter as Router,
} from "react-router-dom";
import {SideNavigationAndPage} from "./components/side-navigation-and-page/side-navigation-and-page";
import { Provider } from 'react-redux';
import {store} from "./redux/store/store";


function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
