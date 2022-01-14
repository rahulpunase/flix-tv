import React from 'react';
import './header.scss';
import {Logo} from "../logo/logo";
import SearchInput from "../search-input/search-input";

const Header = () => {
	return (
		<header className="header-component">
			<div className="he-centre">
				<nav className="nav-container">
					<div className="nav-logo">
						<Logo height={80} width={80}/>
					</div>
					<div className="right-container">
						<div className="search-holder">
							<SearchInput/>
						</div>
						<div className="other-option-holder">
							<div className="options">
								<div className="option-items">
									<i className="fa fa-heart"/>
								</div>
								<div className="option-items">
									<i className="fa fa-bell"/>
								</div>
								<div className="option-items">
									<i className="fa fa-user"/>
								</div>
								<div className="option-items">
									<i className="fa fa-cogs"/>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export  {Header};
