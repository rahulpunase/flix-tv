import {IAction} from "../../store/store";
import {INITIATE_APP} from "./app-configuration.action";

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
	initialized: false
}

export const appConfiguration = (state: IAppConfiguration = defaultState, action: IAction<IAppConfiguration>) => {
	switch (action.type) {
		case INITIATE_APP: {
			return {
				...state,
				images: action.payload.images,
				change_keys: action.payload.change_keys,
				initialized: true
			}
		}
		default: {
			return state;
		}
	}
}
