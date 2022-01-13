import React from 'react';
import './home-page.scss';
import {SwiperAndSideNavigationWrapper} from "../../components/swiper-and-side-navigation-wrapper/swiper-and-side-navigation-wrapper";

function HomePage(props: any) {
	return (
		<div className='home-page'>
			<SwiperAndSideNavigationWrapper/>
		</div>
	);
}

export default HomePage;
