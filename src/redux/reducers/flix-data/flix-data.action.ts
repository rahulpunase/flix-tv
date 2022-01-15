import {IAction} from "../../store/store";
import {ITrendingData} from "./flix-data.reducer";

export const INIT_TRENDING = 'INIT_TRENDING';

export const _initTrending = (trendingData: ITrendingData): IAction<any> => ({
	type: INIT_TRENDING,
	payload: trendingData
})
