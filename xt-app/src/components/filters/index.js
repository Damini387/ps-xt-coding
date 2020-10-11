import React, { useEffect, useState, useReducer } from 'react';
// import Axios from 'axios';

import Button from '../../common/Button';

import './index.scss';

import getAllData from '../../store/reducers';

const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

const Filters = (props) => {

    // const [launchYrs, setLaunchYrs] = useState();

    const [filterData, dispatch] = useReducer(getAllData, []);

    // useEffect(() => {
    //     Axios.get("http://localhost:3030/allDetails").then(response => {
    //         const launchYears = response.data.map((data, index) => data.launch_year);
    //         // setLaunchYrs(new Set(launchYears));
    //         setLaunchYrs(launchYears);
    //     });
    // }, []);

    // const getAllYears = () => {

    //     return launchYrs && launchYrs.map((year, index) => {
    //         return <Button value={year} key={index} />
    //     });

    // }


    const handleClick = (year) => {
        // const url = `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=${year}`;
        // Axios.get(url).then(response => {
        //     const filteredData = response.data && response.data.filter((data) => {
        //         return data.launch_year === year
        //     });

        //     console.log(filteredData);
        // });

        dispatch({ type: 'FILTER_ROCKET_YEAR', payload: { showYear: year } });

        props.filterRocket(filterData.filtered_rocket);

    }

    const getButtonsOfYears = () => {
        return years && years.map((year, index) => {
            return <Button value={year} key={index} click={(text)=>handleClick(text)}/>
        })
    }

    const handleLanding = (value) => {

        dispatch({ type: 'FILTER_LANDING', payload: { showLanding: value } });

    }

    const handleLaunch = (value) => {
        dispatch({ type: 'FILTER_LAUNCH', payload: { showLaunching: value } });
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
                    <Button value="True" click={(value)=>handleLaunch(value)}/>
                    <Button value="False" click={(value)=>handleLaunch(value)}/>
                </div>
            </div>
            <div className="successLanding">
                <div className="heading">Successful Landing</div>
                <hr />
                <div className="buttons">
                    <Button value="True" click={(value)=>handleLanding(value)}/>
                    <Button value="False" click={(value)=>handleLanding(value)}/>
                </div>

            </div>
        </div>
    );
}

export default Filters;