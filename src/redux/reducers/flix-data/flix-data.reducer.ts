import {IAction} from "../../store/store";
import {INIT_TRENDING} from "./flix-data.action";

export interface Trending {
	"adult": boolean,
	"backdrop_path": string,
	"genre_ids": Array<number>
	"id": number,
	"original_language": string,
	"original_title": string,
	"overview": string,
	"poster_path": string,
	"release_date": string,
	"title": string,
	"video": boolean,
	"vote_average": number,
	"vote_count": number,
	"popularity": number
}

export interface ITrendingData {
	page: number,
	results: Array<Trending>
}

export interface IFlixData {
	trending: ITrendingData | null;
}

const defaultState = {
	trending: null
}

export const flixData = (state: IFlixData = defaultState, action: IAction<any>): IFlixData => {
	switch(action.type) {
		case INIT_TRENDING: {
			return {
				...state,
				trending: action.payload
			}
		}
		default: {
			return state;
		}
	}
}
