import React from 'react';
import './rating.scss';

const Rating = () => {
	return (
		<div className="rating-component">
			<div className="circular">
				<div className="inner"/>
				<div className="number">100%</div>
				<div className="circle">
					<div className="bar left">
						<div className="progress"/>
					</div>
					<div className="bar right">
						<div className="progress"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rating;
