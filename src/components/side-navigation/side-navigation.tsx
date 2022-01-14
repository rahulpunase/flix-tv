import React from 'react';
import './side-navigation.scss';
import {Link, NavLink} from 'react-router-dom';

function SideNavigation() {
	const data:Array<any> = [
		{
			name: 'Home',
			path: 'home',
		},
		{
			name: 'Movies',
			path: 'movies',
		},
		{
			name: 'TV Shows',
			path: 'tv-shows',
		},{
			name: 'People',
			path: 'people',
		}
	];
	return (
		<div className="side-navigation-component">
			<div className="nav-holder">
				<div className="nav-list">
					{data.map((nav) => (
						<NavLink to={nav.path} activeClassName="active" className="nav-list-item" key={nav.path}>
							<span>{nav.name}</span>
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
}

export {SideNavigation};
