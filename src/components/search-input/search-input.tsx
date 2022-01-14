import React from 'react';
import './search-input.scss';

const SearchInput = () => {
	return (
		<div className="search-input-component">
			<div className="input-holder">
				<input type="text" placeholder="Search movies, tv shows, celebrities..."/>
			</div>
			<div className="button-holder">
				<button><i className="fa fa-search"/></button>
			</div>
		</div>
	);
};

export default SearchInput;
