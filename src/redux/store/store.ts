import {applyMiddleware, combineReducers, createStore} from "redux";
import {appConfiguration, IAppConfiguration} from "../reducers/app-configuration/app-configuration.reducer";
import thunk from 'redux-thunk';

export interface IAction<T> {
	type: string;
	payload: T;
}

export interface IStore {
	appConfiguration: IAppConfiguration
}

const combinedReducers = combineReducers({
	appConfiguration: appConfiguration
});

export const store = createStore<IStore, any, any, any>(combinedReducers, applyMiddleware(thunk));
