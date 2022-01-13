import React from 'react';
import './swiper-and-side-navigation-wrapper.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination]);


const SwiperAndSideNavigationWrapper = () => {
	return (
		<div className="swiper-and-side-navigation-wrapper-component">
			<div className="main-holder">
				<div className="left-holder"></div>
				<div className="swiper-holder">
					<Swiper spaceBetween={0} className="mySwiper" pagination={{
						"clickable": true}}>
						<SwiperSlide>1</SwiperSlide>
						<SwiperSlide>2</SwiperSlide>
						<SwiperSlide>3</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export {SwiperAndSideNavigationWrapper};
