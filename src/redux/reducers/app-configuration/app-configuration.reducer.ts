import {IAction} from "../../store/store";
import {INITIATE_APP, INITIATE_COUNTRIES, INITIATE_GENRES} from "./app-configuration.action";

export interface ICountry {
	iso_3166_1: string;
	english_name: string;
}

export interface IGenre {
	id: number;
	name: string;
}

/*export interface IGenres<T> {
	movie: Array<T>,
	tv: Array<T>
}*/

export interface IAppConfiguration {
	images: {
		base_url: string;
		secure_base_url: string;
		backdrop_sizes: Array<string>;
		logo_sizes: Array<string>;
		poster_sizes: Array<string>;
		profile_sizes: Array<string>;
		still_sizes: Array<string>
	},
	change_keys: Array<string>;
	initialized: boolean;
	countries: Array<ICountry>;
	genres: {
		movie: { genres: Array<IGenre> },
		tv: { genres: Array<IGenre> }
	}
}

const defaultState: IAppConfiguration = {
	images: {
		base_url: '',
		secure_base_url: '',
		backdrop_sizes: [],
		logo_sizes: [],
		poster_sizes: [],
		profile_sizes: [],
		still_sizes: []
	},
	change_keys: [],
	initialized: false,
	countries: [],
	genres: {
		movie: {genres: []},
		tv: {genres: []}
	}
}

export const appConfiguration = (state: IAppConfiguration = defaultState, action: IAction<IAppConfiguration>): IAppConfiguration => {
	switch (action.type) {
		case INITIATE_APP: {
			return {
				...state,
				images: action.payload.images,
				change_keys: action.payload.change_keys,
				initialized: true
			}
		}
		case INITIATE_COUNTRIES: {
			return {
				...state,
				countries: action.payload.countries
			}
		}
		case INITIATE_GENRES: {
			console.log(action);
			return {
				...state,
				genres: {
					movie: action.payload.genres.movie,
					tv: action.payload.genres.tv
				}
			}
		}
		default: {
			return state;
		}
	}
}
