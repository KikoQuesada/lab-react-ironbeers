import React from 'react';
import { Link } from 'react-router-dom'



function BeerButton({ path, title }) {
    return (
        <div>
            <Link className="text-decoration-none btn third" to={path}>{title}</Link>
        </div>
    )
}

export default BeerButton;