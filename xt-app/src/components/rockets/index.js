// TODO: add landing success

import React from 'react';

import Rocket from './rocket';

const Rockets = (props) => {

    const { rocketData } = props;

    return (
        <div className={`rockets ${!rocketData ? 'empty' : ''}`}>

            {!rocketData && <div className="loader"></div>}

            {rocketData && rocketData.map((details, index) => {
                const { links: { mission_patch }, mission_name, flight_number, mission_id, launch_year, launch_success } = details;
                return <Rocket
                    rcktImg={mission_patch}
                    rocketName={`${mission_name} #${flight_number}`}
                    missionIds={mission_id}
                    launchYear={launch_year}
                    launchSuccess={`${launch_success}`}
                    landingSuccess={`${false}`}
                    key={index} />
            })}
        </div>
    );
}

export default Rockets;