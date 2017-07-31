import React, { Component } from 'react';
import poolsupplies from '../data/data';
import {Link} from 'react-router-dom';

class Cues extends Component {
    render() {
        let output = poolsupplies.cues.map((cues, index) =>{
            return(
                <div key={index}>
                    <h2>{cues.name}</h2>
                    <div className="innersection">
                        <img src="http://fillmurray.com/100/100" alt="cue"/>
                        <p>Description: {cues.description}</p>
                        <p>Price: ${cues.price}</p>
                    </div>
                    <Link to="">Manufacturer Website</Link>
                </div>
                )
        });
        return (
            <div>
                {output}
            </div>
        );
    }
}

export default Cues;