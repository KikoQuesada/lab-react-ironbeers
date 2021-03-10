
import React from 'react';
import beersService from '../../../services/beer-service'

class BeerList extends React.Component() {
    
    state = {
        beers: []
    }

    componentDidMount() {
        beersService.list()
            .then(beers => {
                console.log(beers)
                this.setState({ beers })
            })
            .catch(error => console.error(error));
    }

    render() {
        
        return (
            <div>
                
            </div>
        )
    }

}

export default BeerList;