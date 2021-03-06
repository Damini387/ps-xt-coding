import React, { useEffect, useState, useReducer } from 'react';
import { connect } from 'react-redux';

import Button from '../../common/Button';

import './index.scss';

import getAllData from '../../store/reducers';

const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

const Filters = (props) => {

    const [filterData, dispatch] = useReducer(getAllData, []);

    const [disableButton, setDisableButton] = useState();

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (props.data.length === 0) {
            setDisableButton(true);
        } else {
            setDisableButton(false);
        }
    }, [props]);

    useEffect(() => {
        props.filterRockets(filterData.state);
    }, [filterData]);

    const handleClick = (year) => {

        setSelected(false);

        dispatch({ type: 'FILTER_ROCKET_YEAR', payload: { showYear: year } });

        props.filterRockets(filterData);


    }

    const getButtonsOfYears = () => {
        return years && years.map((year, index) => {
            return <Button value={year} buttonSelected={selected} key={index} disabled={disableButton} click={(text) => handleClick(text)} />
        });
    }

    const handleLanding = (value) => {

        dispatch({ type: 'FILTER_LANDING', payload: { showLanding: value } });

        props.filterRockets(filterData);

    }

    const handleLaunch = (value) => {
        dispatch({ type: 'FILTER_LAUNCH', payload: { showLaunching: value } });

        props.filterRockets(filterData);
    }

    return (
        <div className="filters">
            <h3>Filters</h3>
            <div className="launchYear">
                <div className="heading">Launch Year</div>
                <hr />
                <div className="allYears">
                    {getButtonsOfYears()}
                </div>
            </div>
            <div className="successLaunch">
                <div className="heading">Successful Launch</div>
                <hr />
                <div className="buttons">
                    <Button value="True" buttonSelected={false} disabled={disableButton} click={(value) => handleLaunch(value)} />
                    <Button value="False" buttonSelected={false} disabled={disableButton} click={(value) => handleLaunch(value)} />
                </div>
            </div>
            <div className="successLanding">
                <div className="heading">Successful Landing</div>
                <hr />
                <div className="buttons">
                    <Button value="True" buttonSelected={false} disabled={disableButton} click={(value) => handleLanding(value)} />
                    <Button value="False" buttonSelected={false} disabled={disableButton} click={(value) => handleLanding(value)} />
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.getAllData
}

export default connect(mapStateToProps)(Filters);