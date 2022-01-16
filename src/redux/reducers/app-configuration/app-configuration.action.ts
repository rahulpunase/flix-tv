import {IAction} from "../../store/store";
import {IAppConfiguration, ICountry} from "./app-configuration.reducer";

export const INITIATE_APP = 'APP_CON_INITIATE_APP';
export const INITIATE_COUNTRIES = 'INITIATE_COUNTRIES';

export const _initiateApp = (payload: IAppConfiguration): IAction<any> => ({
	type: INITIATE_APP,
	payload: payload
});

export const _initiateCountries = (payload: Array<ICountry>): IAction<any> => ({
	type: INITIATE_COUNTRIES,
	payload: payload
});
