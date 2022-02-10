import React, {useEffect, useState} from 'react';
import './content-swiper.scss';
import ContentTab, {ITabOption} from "./content-tab/content-tab";
import {Swiper, SwiperSlide} from "swiper/react";
import ContentCard from "./content-card/content-card";
import {getR} from "../../http/http-configuration";
import cardLoadingImg from '../../assets/images/card-loading.gif';
import ContentPagination from "./content-pagination/content-pagination";
import {Utils} from "../../utils/utils";


export interface IContentSwiper {
	heading: string;
	tabOptions: Array<ITabOption>;
}

export interface IContentResult {
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

export interface IContentResultObj {
	page: number;
	results: Array<IContentResult>;
	totalPages: number;
	total_results: number;
}

const ContentSwiper = (props: IContentSwiper) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [activeTab, setActiveTab] = useState<ITabOption>();
	const [swiperResult, setSwiperResult] = useState<IContentResultObj>({
		page: 0,
		results: [],
		totalPages: 0,
		total_results: 0
	});

	useEffect(() => {
		const activeTab = props.tabOptions.find(tab => tab.selected);
		if (activeTab) {
			setActiveTab(activeTab);
			makeApiRequestToFetchData(activeTab.tabApiPath);
		}
	}, []);

	const getActiveTabFromContent = (activeTab: ITabOption) => {
		setActiveTab(activeTab);
		makeApiRequestToFetchData(activeTab.tabApiPath);
	}

	const makeApiRequestToFetchData = (tabApiPath: string) => {
		setLoading(true);
		getR<IContentResultObj>(tabApiPath)
			.subscribe(data => {
				setSwiperResult(data);
				setLoading(false);
			});
	}

	const onPageChange = (pageNumber: number) => {
		if (activeTab) {
			const path = Utils.setPageNoToAPIString(activeTab.tabApiPath, pageNumber);
			makeApiRequestToFetchData(path);
		}
	}
	return (
		<div className="content-swiper-component">
			<div className="header">
				<div className="heading">{props.heading}</div>
				<div className="content-tab-holder">
					<ContentTab tabOptions={props.tabOptions} getActiveTabFromContent={getActiveTabFromContent}/>
				</div>
			</div>
			<div className="swiper-holder">
				<Swiper className="custom-swiper" slidesPerView={4} spaceBetween={20}>
					{
						loading && [1, 2, 3, 4].map(data => (
							<SwiperSlide key={data}>
								<div className="loading">
									<img src={cardLoadingImg} alt=""/>
								</div>
							</SwiperSlide>
						))
					}
					{
						!loading && swiperResult.results.map(data => (
							<SwiperSlide key={data.id}>
								<ContentCard
									title={data.title}
									imagePath={data.poster_path}
									rating={data.vote_count}
									cerChar={'R'}
									genres={data.genre_ids}
									releaseDate={data.release_date}
								/>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
			<div className="pagination-holder">
				<div className="pagination-to-right">
					<ContentPagination currentPage={swiperResult.page} pageChangeHandler={onPageChange}/>
				</div>
			</div>
		</div>
	);
};

export default ContentSwiper;
