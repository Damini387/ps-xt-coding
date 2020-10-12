import React, { useState, useEffect } from 'react';

import Filters from '../filters';
import Rockets from '../rockets';

import './index.scss';

const LaunchProgram = (props) => {

    const [rockets, setRockets] = useState();

    useEffect(() => {
        setRockets(props.data);
    }, [props]);

    const handleRockets = (data) => {
        setRockets(data.rockets);
    }

    return (
        <div className="launchPad">
            <Filters filterRockets={(data) => handleRockets(data)} />
            <Rockets rocketData={rockets} />
        </div>
    );

}

export default LaunchProgram;