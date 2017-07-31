import React, { Component } from 'react';
import poolsupplies from '../data/data';
import {Link} from 'react-router-dom';

class Products extends Component {
    render() {
        let line = this.props.match.params.id;
        let productLine =  poolsupplies[line]
        let output = productLine.map((supply, index) =>{
            let link = "/" + line + "/" + index;
            return(
                <div key={index}>
                    <h2>{supply.name}</h2>
                    <span className="innersection">
                        <img src="http://fillmurray.com/100/100" alt="cue"/>
                        <p>Price: ${supply.price}</p>
                    </span>
                     <Link to={link}>Details</Link> 
                </div>
                )
        });
        return (
            <div className="products">
                {output}
            </div>
        );
    }
}

export default Products;