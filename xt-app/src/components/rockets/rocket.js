import React from 'react';

import './index.scss';

const Rocket = (props) => {

    const { rcktImg, rocketName, missionIds, launchYear, launchSuccess, landingSuccess } = props;

    return (
        <div className="rocket">
            <img src={rcktImg} alt="test" className="rocketImg" />
            <p className="rocketName">
                {rocketName}
            </p>
            <div className="missionNames">
                <p className="heading">Mission Ids:</p>
                <ul>
                    {missionIds && missionIds.map((id, index) => {
                        return <li key={index}>{id}</li>
                    })}

                    {missionIds && missionIds.length === 0 &&
                        <li>No Mission Ids</li>}
                </ul>
            </div>

            <div className="launchYear">
                <p className="heading">Launch Year:</p>
                <span>{launchYear}</span>
            </div>
            <div className="successFulLaunch">
                <p className="heading">Successful Launch:</p>
                <span>{launchSuccess}</span>
            </div>
            <div className="successfulLanding">
                <p className="heading">Successful Landing:</p>
                <span>{landingSuccess}</span>
            </div>
        </div>
    );
}

export default Rocket;