import {IAction} from "../../store/store";
import {IAppConfiguration, ICountry, IGenre} from "./app-configuration.reducer";

export const INITIATE_APP = 'APP_CON_INITIATE_APP';
export const INITIATE_COUNTRIES = 'INITIATE_COUNTRIES';
export const INITIATE_GENRES = 'INITIATE_GENRES';

export const _initiateApp = (payload: IAppConfiguration): IAction<any> => ({
	type: INITIATE_APP,
	payload: payload
});

export const _initiateCountries = (payload: Array<ICountry>): IAction<any> => ({
	type: INITIATE_COUNTRIES,
	payload: payload
});

export const _initiateGenres = (payload: any): IAction<any> => ({
	type: INITIATE_GENRES,
	payload: payload
});
