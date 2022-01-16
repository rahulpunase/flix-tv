import {getR} from "./http-configuration";
import {Observable} from "rxjs";



export const getConfigurations = <T>(): Observable<T> => {
	return getR('configuration');
}

export const getCountries = <T>(): Observable<T> => {
	return getR('/configuration/countries');
}

export const getTodayTrending = <T>(): Observable<T> => {
	return getR('trending/all/day');
}
