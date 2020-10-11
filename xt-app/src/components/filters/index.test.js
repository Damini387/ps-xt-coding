import React from 'react';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';

import Filters from './index';

import { createStore, combineReducers } from "redux";

import getAllData from "../../store/reducers";

const rootReducer = combineReducers({
  getAllData
});

const store = createStore(rootReducer);

let wrapper = mount(
	<Provider store={ store }>
		<Filters />
	</Provider> );

describe('Filters', () => {

	it('should render the Filters Component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render years, success launch and success landing components', () => {
		expect(wrapper.find('.launchYear .heading').text()).toEqual("Launch Year");
        expect(wrapper.find('.successLaunch .heading').text()).toEqual("Successful Launch");
        expect(wrapper.find('.successLanding .heading').text()).toEqual("Successful Landing");
	});

});