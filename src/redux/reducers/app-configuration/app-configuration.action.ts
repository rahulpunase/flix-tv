import {IAction} from "../../store/store";
import {IAppConfiguration} from "./app-configuration.reducer";

export const INITIATE_APP = 'APP_CON_INITIATE_APP';

export const _initiateApp = (payload: IAppConfiguration): IAction<any> => ({
	type: INITIATE_APP,
	payload: payload
})
