import React from 'react';
import { shallow } from 'enzyme';
import Rockets from './index';
import Rocket from './rocket';

const testRocket = [{"mission_name": "test", "flight_number": "1", "mission_id": "TEST", "launch_year": "2050", "launch_success": true, "links" : {"mission_patch": "image.jpg"}}]

let empty_wrapper = shallow(
    <Rockets />);

    
let wrapper = shallow(
    <Rockets rocketData={testRocket}/>);

describe('Rockets', () => {

	it('should render the multiple Rockets Component correctly', () => {
		expect(empty_wrapper).toMatchSnapshot();
	});

	it('should render Filters and Rockets component correctly', () => {
        expect(wrapper.find(Rocket)).toHaveLength(1);
	});

});