import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper = shallow(
	<App>
		<div className="doneBy">
			<h3 className="center"> Developed By: </h3>
			<span className="devName"> Damini Upadhyay </span>
		</div>
	</App>);

describe('App', () => {

	it('should render the App Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('renders the App children', () => {
		expect(wrapper.find('.devName').text()).toContain("Damini Upadhyay");
	});

});