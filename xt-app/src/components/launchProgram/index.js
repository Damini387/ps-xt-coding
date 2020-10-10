import React, { Fragment } from 'react';
import Filters from '../filters';
import Rockets from '../rockets';

import './index.scss';

const launchProgram = () => {
    return (
        <Fragment>
            <h2>SpaceX Launch Program</h2>
            <div className="launchPad">
                <Filters />
                <Rockets />
            </div>
        </Fragment>
    );

}

export default launchProgram;