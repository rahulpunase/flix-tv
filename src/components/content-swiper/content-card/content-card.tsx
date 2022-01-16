import React from 'react';
import './content-card.scss';
import {BaseImage} from "../../base-image/base-image";
import {NavLink} from "react-router-dom";

export interface IContentCard {
	title: string;
	imagePath: string;
	cerChar: string;
	releaseDate: string;
	year: string;
	genres: Array<number>;
	rating: number;
}

const ContentCard = (props: IContentCard) => {
	return (
		<div className="content-card-component">
			<NavLink className="custom-link" to={''}>
				<div className="centralized">
					<div className="header">
						<div className="card-title">{props.title}</div>
						<div className="card-year">{props.year}</div>
					</div>
					<div className="card-image-holder">
						<BaseImage src={props.imagePath} imageSize={'w780'}/>
					</div>
					<div className="bottom-content">
						<div className="left-info">
							<div className="cer-date">
								<div className="cer">{props.cerChar}</div>
								<div className="release-date">{props.releaseDate}</div>
							</div>
							<div className="creator-name">{props.genres}</div>
							<div className="creator-label">Genre</div>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default ContentCard;
