import React, {useEffect, useState} from 'react';
import './home-page.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
	Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import img1 from '../../assets/images/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg';
import img2 from '../../assets/images/1RjyfPLsZTq3lUdJY7pTzcmpPKl.jpg';
import img3 from '../../assets/images/sg4xJaufDiQl7caFEskBtQXfD4x.jpg';
SwiperCore.use([Pagination]);
function HomePage(props: any) {
	// SwiperCore.use([Pagination]);
	const [height, setHeight] = useState(0);
	useEffect(() => {
		setHeight(window.innerHeight - 100);
	}, []);
	return (
		<div className='home-page'>
			<div className="swiper-holder" style={{height: height + 'px'}}>
				<Swiper slidesPerView={2} spaceBetween={0} className="h-flix">
					<SwiperSlide className="custom-swiper-slides">
						<div className="slide-wrapper">
							<img src={img1} alt=""/>
						</div>
					</SwiperSlide>
					<SwiperSlide className="custom-swiper-slides">
						<div className="slide-wrapper">
							<img src={img2} alt=""/>
						</div>
					</SwiperSlide>
					<SwiperSlide className="custom-swiper-slides">
						<div className="slide-wrapper">
							<img src={img3} alt=""/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default HomePage;
