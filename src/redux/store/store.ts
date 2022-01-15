import {applyMiddleware, combineReducers, createStore} from "redux";
import {appConfiguration, IAppConfiguration} from "../reducers/app-configuration/app-configuration.reducer";
import thunk from 'redux-thunk';
import {flixData, IFlixData} from "../reducers/flix-data/flix-data.reducer";

export interface IAction<T> {
	type: string;
	payload: T;
}

export interface IStore {
	appConfiguration: IAppConfiguration,
	flixData: IFlixData
}

const combinedReducers = combineReducers({
	appConfiguration: appConfiguration,
	flixData: flixData
});

export const store = createStore<IStore, any, any, any>(combinedReducers, applyMiddleware(thunk));
