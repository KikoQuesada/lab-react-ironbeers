
import React from 'react';
import beersService from '../../../services/beer-service'
import Beer from '../beer/Beer';


class BeerList extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        beersService.list()
            .then(beers => this.setState({ beers }))
            .catch(error => console.error(error));
    }

    render() {
        const { beers } = this.state;
        return (


            <div className="row row-cols-12 row-cols-sm-2 row-cols-md-4">

                {beers.map(beer => (
                    <div key={beer._id}><Beer key={beer._id} {...beer} /></div>
                ))}
            </div>


        )
    }

}

export default BeerList;

