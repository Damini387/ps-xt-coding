import React from 'react';
import { shallow } from 'enzyme';
import LaunchProgram from './index';
import Filters from '../filters/index';
import Rockets from '../rockets/index';

let wrapper = shallow(
    <LaunchProgram />);

describe('Launch Program', () => {

	it('should render the Launch Program Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render Filters and Rockets component correctly', () => {
        expect(wrapper.find(Filters)).toHaveLength(1);
        expect(wrapper.find(Rockets)).toHaveLength(1);
	});

});