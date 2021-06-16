import React, { Component } from 'react';
import CelsiusToFahrenheit from './CelsiusToFahrenheit';
import KmToMiles from './KmToMiles';

class UniversalConverter extends Component {
    render() {
        return (
            <div>
                <h2>Conversor Universal</h2>
                <CelsiusToFahrenheit/>
                <KmToMiles/>
            </div>
        );
    }
}

export default UniversalConverter;
