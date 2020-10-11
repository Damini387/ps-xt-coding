import React, { Fragment } from 'react';

import Filters from '../filters';
import Rockets from '../rockets';

import './index.scss';

const launchProgram = (props) => {

    const { data } = props;

    const handleRockets = (test) => {
        console.log(test);
    }

    return (
        <Fragment>
            <h2>SpaceX Launch Program</h2>
            <div className="launchPad">
                <Filters filterRocket={(test) => handleRockets(test)} />
                <Rockets rocketData={data} />
            </div>
        </Fragment>
    );

}

export default launchProgram;