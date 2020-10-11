import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const mockFn = jest.fn();

let wrapper = shallow(
	<Button value={"test"} onClick={mockFn}></Button>);

describe('Button', () => {

	it('should render the Button Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render correct value', () => {
        expect(wrapper.find('button').text()).toEqual("test");
	});

});