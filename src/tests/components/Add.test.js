import React from 'react'
import { Provider } from 'react-redux'
import {Add} from '../../components/Add'
import moment from 'moment'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() });

import { expenses } from '../fixture-data'

let submitSpy,history,wrapper;

beforeAll(() => {
    submitSpy = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<Add submit={submitSpy} history={history} />);
})

test('testing Adding Form ',()=>{

    const wrapper = shallow(<Add />);
    expect(wrapper).toMatchSnapshot()
    //console.log(wrapper.find('form'));
})

test('testing Adding Form Spy', () => {

    wrapper.find('Form').prop('onSubmit')(expenses[2]);

    expect(submitSpy).toHaveBeenCalled();
    expect(history.push).toHaveBeenLastCalledWith('/');

    
//.toHaveBeenLastCalledWith(arg1, arg2, ...)
    //console.log(wrapper.find('form'));
})