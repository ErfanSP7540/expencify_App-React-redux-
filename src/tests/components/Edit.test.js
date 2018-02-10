import React from 'react'
import {Edit} from '../../components/Edit'
import moment from 'moment'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() });

import { expenses } from '../fixture-data'

let editDispatchSpy ;
let removeDispatchSpy ;
let historySpy ;
let wrapper;

beforeAll(() => {
    editDispatchSpy = jest.fn();
    removeDispatchSpy = jest.fn();
    historySpy = {push:jest.fn()};

    wrapper = shallow(<Edit 
        
        expense={expenses[0]}
        match={({ params: ({ id: expenses[0].id }) })} 
        editDispatch ={editDispatchSpy}
        removeDispatch={removeDispatchSpy}
        history={historySpy}

        />);
})

test('Edit Page  ', () => {

    expect(toJson(wrapper)).toMatchSnapshot();

})


test('Edit Page  EditSpy', () => {

    wrapper.find('Form').prop('onSubmit')(expenses[0]);
    expect(editDispatchSpy).toHaveBeenCalled()
    expect(historySpy.push).toHaveBeenLastCalledWith('/');

})


test('Edit Page  DeleteSpy', () => {

    //wrapper.find('button').simulate('click')
     wrapper.find('button').prop('onClick')()
     expect(removeDispatchSpy).toHaveBeenCalled()
     expect(historySpy.push).toHaveBeenLastCalledWith('/');

})