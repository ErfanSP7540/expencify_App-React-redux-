import React from 'react'
import { Item } from '../../components/ExpenseListItem'
import {expenses} from '../fixture-data'


import {shallow } from 'enzyme'
import {configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter:new Adapter()})

test('Item display Test  empty',()=>{
    console.log('hi');
    const wrapper = shallow(<Item />)

    expect(wrapper).toMatchSnapshot();
    
})



test('Item display Test', () => {
    console.log('hi');
    const wrapper = shallow(<Item {...expenses[1]}/>)

    expect(wrapper).toMatchSnapshot();

})