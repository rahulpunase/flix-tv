import React from 'react';
import './side-navigation-and-page.scss';
import SwiperCore, {Pagination} from 'swiper';
import {RouterConfiguration} from "../router-configuration/router-configuration";
import {SideNavigation} from "../side-navigation/side-navigation";

SwiperCore.use([Pagination]);


const SideNavigationAndPage = () => {
	return (
		<div className="side-navigation-and-page-component">
			<div className="main-holder">
				<div className="left-navigation-holder">
					<SideNavigation/>
				</div>
				<div className="router-holders">
					<RouterConfiguration/>
				</div>
			</div>
		</div>
	);
};

export {SideNavigationAndPage};
