import React from 'react';
import { Link } from 'react-router-dom';


function Beer({ _id, image_url, name, tagline, contributed_by }) {
    return (
        <div className="beerCard">
            <div className="inner-card">
                <div className="img-wrapper">
                    <img className="w-25" src={image_url} alt={name} />
                </div>
                <div className="row">
                    <h2>{name}</h2>
                    <h5>{tagline}</h5>
                    <em>by {contributed_by}</em>
                    <Link to={`/beers/${_id}`} className="view-btn">View</Link>
                </div>
            </div>
        </div>
    );
}

export default Beer;