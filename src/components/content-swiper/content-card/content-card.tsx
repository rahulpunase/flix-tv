import React, {useEffect} from 'react';
import './content-card.scss';
import {BaseImage} from "../../base-image/base-image";
import {NavLink} from "react-router-dom";
import {Utils} from "../../../utils/utils";
import {useSelector} from "react-redux";
import {IStore} from "../../../redux/store/store";

export interface IContentCard {
	title: string;
	imagePath: string;
	cerChar: string;
	releaseDate: string;
	genres: Array<number>;
	rating: number;
}

const ContentCard = (props: IContentCard) => {
	const store = useSelector((store: IStore) => store);
	const movieGenre = store.appConfiguration.genres.movie;
	return (
		<div className="content-card-component" title={props.title}>
			<NavLink className="custom-link" to={''}>
				<div className="centralized">
					<div className="card-image-holder">
						<BaseImage src={props.imagePath} imageSize={'w220_and_h330_face'}/>
					</div>
					<div className="header">
						<div className="card-title">{props.title}</div>
					</div>
					<div className="bottom-content">
						<div className="left-info">
							<div className="release-date"><b>Release Date:</b> {props.releaseDate}</div>
							<div className="creator-name"><b>Genre: </b>{Utils.getGenreList(movieGenre.genres, props.genres)}</div>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default ContentCard;
