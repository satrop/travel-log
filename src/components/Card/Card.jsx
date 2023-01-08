import React from "react";
import pin from "../../assets/icon--pin.svg";

import "./card.scss";

const Card = (props) => {
	return (
		<article className="card">
			<div className="card__image">
				<img src={props.imageUrl} alt={props.title} />
			</div>
			<div className="card__text">
				<div className="card__location">
					<div className="country">
						<img src={pin} alt="" />
						{props.location}
					</div>
					<a href="#nogo" className="map">
						View on Google Maps
					</a>
				</div>
				<div className="card__title">{props.title}</div>
				<div className="card__date">
					<div className="start-date">{props.startDate}</div>
					<div className="end-date">{props.endDate}</div>
				</div>
				<div className="card-description">{props.description}</div>
			</div>
		</article>
	);
};

export default Card;
