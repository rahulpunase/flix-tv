import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {defer, map, Observable} from "rxjs";

const axiosRequestConfiguration: AxiosRequestConfig = {
	baseURL: 'https://api.themoviedb.org/3/',
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json'
	},
	params: {
		api_key: 'd61b3b53a6dbef628282cd7dc88cd08b'
	}
}

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
	const axiosInstance = axios.create(config);

	axiosInstance.interceptors.request.use(function (config) {
		// Do something before request is sent
		return config;
	}, function (error) {
		// Do something with request error
		return Promise.reject(error);
	});

// Add a response interceptor
	axiosInstance.interceptors.response.use(function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	}, function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	});

	return axiosInstance;
}

const axiosInstance = initialization(axiosRequestConfiguration);

export const getR = <T>(url: string, queryParams?: object): Observable<T> => {
	return defer(() => axiosInstance.get<T>(url, { params: queryParams }))
		.pipe(map(result => result.data));
}


