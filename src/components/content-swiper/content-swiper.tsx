import React, {useEffect, useState} from 'react';
import './content-swiper.scss';
import ContentTab, {ITabOption} from "./content-tab/content-tab";
import {Swiper, SwiperSlide} from "swiper/react";
import {NavLink} from 'react-router-dom';
import ContentCard from "./content-card/content-card";
import {getR} from "../../http/http-configuration";


export interface IContentSwiper {
	heading: string;
	tabOptions: Array<ITabOption>;
}

export interface ISwiperData {
	"adult": boolean,
	"backdrop_path": string,
	"genre_ids": Array<number>
	"id": number,
	"original_language": string,
	"original_title": string,
	"overview": string,
	"popularity": number,
	"poster_path": string,
	"release_date": string,
	"title": string,
	"video": boolean,
	"vote_average": number,
	"vote_count": number
}

export interface IContentSwiperResult {
	page: number;
	results: Array<ISwiperData>;
	totalPages: number;
	total_results: number;
}

const ContentSwiper = (props: IContentSwiper) => {
	const [swiperResult, setSwiperResult] = useState<IContentSwiperResult>({
		page: 0,
		results: [],
		totalPages: 0,
		total_results: 0
	});

	useEffect(() => {
		getR<IContentSwiperResult>(props.tabOptions[0].tabApiPath).subscribe(data => setSwiperResult(data));
	}, []);
	return (
		<div className="content-swiper-component">
			<div className="header">
				<div className="heading">{props.heading}</div>
				<div className="content-tab-holder">
					<ContentTab/>
				</div>
			</div>
			<div className="swiper-holder">
				<Swiper className="custom-swiper" slidesPerView={4} spaceBetween={20}>
					{
						swiperResult.results.map(data => (
							<SwiperSlide key={data.id}>
								<ContentCard
									title={data.title}
									imagePath={data.poster_path}
									rating={data.vote_count}
									cerChar={'R'}
									genres={data.genre_ids}
									releaseDate={data.release_date}
									year={data.release_date[0]}
								/>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</div>
	);
};

export default ContentSwiper;
