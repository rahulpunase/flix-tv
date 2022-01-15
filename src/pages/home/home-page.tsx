import React, {useEffect, useState} from 'react';
import './home-page.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
	Pagination,
	Autoplay
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import {getTodayTrending} from "../../http/http-handler";
import {useDispatch, useSelector} from "react-redux";
import {_initTrending} from "../../redux/reducers/flix-data/flix-data.action";
import {ITrendingData} from "../../redux/reducers/flix-data/flix-data.reducer";
import {IStore} from "../../redux/store/store";
import {BaseImage} from "../../components/base-image/base-image";


function HomePage(props: any) {
	const [height, setHeight] = useState(0);
	const dispatch = useDispatch();
	const store = useSelector((store: IStore) => store);
	useEffect(() => {
		setHeight(window.innerHeight - 100);
		getTodayTrending<ITrendingData>().subscribe(trendingData => dispatch(_initTrending(trendingData)));
	}, []);

	SwiperCore.use([Pagination, Autoplay]);
	return (
		<div className='home-page'>
			<div className="swiper-holder" style={{height: height + 'px'}}>
				<Swiper loop={true} pagination={{
					dynamicBullets: true
				}} slidesPerView={2} spaceBetween={0} autoplay={{delay: 3000}} className="h-flix">
					{
						store.flixData.trending && store.flixData.trending.results.map(trending => (
							<SwiperSlide key={trending.id} className="custom-swiper-slides">
								<div className="slide-wrapper">
									<BaseImage imageSize="w780" src={trending.poster_path}/>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</div>
	);
}

export default HomePage;
