import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Button from '../../common/Button';

import './index.scss';


const Filters = () => {
    const [launchYrs, setLaunchYrs] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3030/allDetails").then(response => {
            const launchYears = response.data.map((data, index) => data.launch_year);
            // setLaunchYrs(new Set(launchYears));
            setLaunchYrs(launchYears);
        });
    }, []);

    const getAllYears = () => {

        return launchYrs && launchYrs.map((year, index) => {
            return <Button value={year} key={index} />
        });

    }

    return (
        <div className="filters">
            <h3>Filters</h3>
            <div className="launchYear">
                <div className="heading">Launch Year</div>
                <hr />
                <div className="allYears">
                    {getAllYears()}
                </div>
            </div>
            <div className="successLaunch">
                <div className="heading">Successful Launch</div>
                <hr />
                <div className="buttons">
                    <Button value="True" />
                    <Button value="False" />
                </div>
            </div>
            <div className="successLanding">
                <div className="heading">Successful Landing</div>
                <hr />
                <div className="buttons">
                    <Button value="True" />
                    <Button value="False" />
                </div>

            </div>
        </div>
    );
}

export default Filters;