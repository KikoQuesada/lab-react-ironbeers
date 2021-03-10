import React from 'react';
import { Link } from 'react-router-dom'
import BeerList from '../beers/beer-list/BeerList'


function BeerButton({ path, title }) {
    return (
        <div>
            <Link className="text-decoration-none btn third" to={path} onClick={<BeerList />}>{title}</Link>
        </div>
    )
}

export default BeerButton;