import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './search-input.scss';
import {
	debounceTime,
	filter,
	Subject,
	switchMap,
} from "rxjs";
import {searchByQuery} from "../../http/http-handler";
import {IContentResultObj} from "../content-swiper/content-swiper";
import { NavLink } from 'react-router-dom'

const SearchInput = () => {
	const [query, setQuery] = useState('');
	const [result, setResult] = useState<IContentResultObj>();
	const [message, setMessage] = useState('Loading results...');
	const onInput$ = useMemo<Subject<string>>(() => new Subject<string>(), []);
	const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
		setQuery(event.currentTarget.value);
		onInput$.next(event.currentTarget.value);
	}
	const setClasses = query ? 'typed' : '';
	useEffect(() => {
		onInput$.pipe(
			filter(query => !!query),
			debounceTime(500),
			switchMap(query => searchByQuery<IContentResultObj>(query)),
		).subscribe(data => setResult(data));
	}, []);

	return (
		<div className={`search-input-component ${setClasses}`}>
			<div className="wrapper">
				<div className="input-holder">
					<input value={query} onChange={(event) => handleInputChange(event)} type="text"
					       placeholder="Search movies, tv shows, celebrities..."/>
				</div>
				<div className="button-holder">
					<button><i className="fa fa-search"/></button>
				</div>
			</div>
			{setClasses && <div className="result-loader">
				<div className="result-items">
					{(query && !result?.results.length) &&  <div className="no-result">No results found</div>}
					{result?.results.map(object => <div className="result-item">
						<NavLink to={''}>
							{object.title}
						</NavLink>
					</div>)}
				</div>
			</div>}
		</div>
	);
};

export default SearchInput;
