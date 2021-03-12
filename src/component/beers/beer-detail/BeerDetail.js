import React from 'react';
import beersService from '../../../services/beer-service';
 




class BeerDetail extends React.Component {

    state = {
        beer: {},
        id: ''
    }


    componentDidMount() {
        const { id } = this.props;
        beersService.detail(id)
            .then(beer => this.setState({ beer }))
            .catch(errors => console.error(errors))
    }



    render() {
        const beer = this.state;
        return (
                <div className="row">
                    <img src={beer.img_url} alt={beer.name} />
                    <div>
                        <h2>{beer.name}</h2>
                        <h4>{beer.tagline}</h4>
                        <span>{beer.attenuation_level}</span><span>{beer.first_brewed}</span>
                        <p>{beer.description}</p>
                        <em>{beer.contributed_by}</em>
                    </div>
                </div>
        );
    }
}

export default BeerDetail;