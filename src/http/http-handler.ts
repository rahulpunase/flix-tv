import {getR} from "./http-configuration";
import {forkJoin, map, Observable} from "rxjs";



export const getConfigurations = <T>(): Observable<T> => {
	return getR('configuration');
}

export const getCountries = <T>(): Observable<T> => {
	return getR('/configuration/countries');
}

export const getTodayTrending = <T>(): Observable<T> => {
	return getR('trending/all/day');
}

export const getGenres = <T>(): Observable<{movie:T, tv: T}> => {
	return forkJoin(
		[getR<T>('/genre/movie/list'), getR<T>('/genre/tv/list')]
	).pipe(
		map(([movieGenre, tvGenre]) => ({
			movie: movieGenre,
			tv: tvGenre
		}))
	)
}
