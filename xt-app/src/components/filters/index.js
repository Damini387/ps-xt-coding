import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Button from '../../common/Button';

import './index.scss';

const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

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

    const getButtonsOfYears = () => {
        return years && years.map((year, index) => {
            return <Button value={year} key={index} />
        })
    }

    return (
        <div className="filters">
            <h3>Filters</h3>
            <div className="launchYear">
                <div className="heading">Launch Year</div>
                <hr />
                <div className="allYears">
                    {/* {getAllYears()} */}
                    {getButtonsOfYears()}
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