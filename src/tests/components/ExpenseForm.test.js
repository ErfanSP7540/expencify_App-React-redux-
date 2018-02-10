import React from 'react'
import Form from '../../components/ExpenseForm'
import moment from 'moment'
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() });


test('input  Form  whitout Input ',()=>{

    //const wrapper = shallow(<Form />);
    //expect(toJson(wrapper)).toMatchSnapshot();

})


import {expenses} from '../fixture-data'

test('input  Form  whit Input',()=>{

    const wrapper = shallow(<Form {...expenses[1]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();

})


test('submit Form ',()=>{
 const wrapper = shallow(<Form />);
    wrapper.find('form').simulate('submit', { preventDefault:()=> {} });
    expect(wrapper.state().error).toBe('please enter description and amount for your expenses')
    expect(toJson(wrapper)).toMatchSnapshot();
    

})


test('Description Inuput Form ',()=>{

    const wrapper = shallow(<Form />);
   
    const value = 'description filled';
    wrapper.find('form input').at(0).simulate('change',{ target: {value} });
    //expect(wrapper.state().error).toBe('please enter description and amount for your expenses')
    expect( wrapper.state().description ).toBe(value)
    
    expect(toJson(wrapper)).toMatchSnapshot();
    

})


test('Note Test', ()=>{

    const wrapper = shallow(<Form />);
    const value = "this is a note for expense";
    wrapper.find('form textarea').simulate('change', { target:{value} })
    expect(  wrapper.state().note   ).toBe(value);
     
})



test('amount   invalid', () => {

    const wrapper = shallow(<Form />);
    const value = "1231.127";
    wrapper.find('form input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state().amount).toBe(0);
})


test('amount   valid', () => {

    const wrapper = shallow(<Form />);
    const value = "1231.12";
    wrapper.find('form input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state().amount).toBe(value);
})

test('onSubmit form with valid date',()=>{


    const onSubmitSpy = jest.fn();

    //onSubmitSpy('erfan')
    //expect(onSubmitSpy).toHaveBeenCalled()
    const wrapper = shallow(<Form expense={expenses[1]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{preventDefault:()=>{}}) 
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        { ...expenses[1], createAt: moment(expenses[1].createAt).valueOf() })
})


test('shoude set datepicker change',()=>{

    const wrapper = shallow(<Form />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment());
    expect(wrapper.state('createAt')).toEqual(moment())

})

test('should test onFoucustesting',()=>{

    const value = true;
    const wrapper = shallow(<Form />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')(value);
    expect(wrapper.state('datePickerFocus')).toBe(value)
})