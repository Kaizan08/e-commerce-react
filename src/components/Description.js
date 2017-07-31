import React, { Component } from 'react';
import poolsupplies from '../data/data';

class Description extends Component {
    render() {
        let line = parseInt(this.props.match.params.id, 10);
        let prod = this.props.match.params.products;
        return (
            <div className="products" key={line}>
                    <h2>{poolsupplies[prod][line].name}</h2>
                    <span className="innersection">
                        <img src="http://fillmurray.com/100/100" alt="cue"/>
                        <p>Description: {poolsupplies[prod][line].description}</p>
                        <p>Price: ${poolsupplies[prod][line].price}</p>
                    </span>
                </div>
        );
    }
}

export default Description;