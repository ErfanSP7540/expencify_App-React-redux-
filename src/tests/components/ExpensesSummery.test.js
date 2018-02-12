import {ExpensesSummery} from '../../components/ExpensesSummery'
import React from 'react'
import moment from 'moment'

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() });


const expenses = [

    { description: 'water Bill', amount: 300, createAt: moment(101), note: "this is a Note(0)" },
    { description: 'gas Bill', amount: 200, createAt: moment(100), note: "this is a Note(1)" },
    { description: 'phone Bill', amount: 100, createAt: moment(500), note: "this is a Note(2)" },
    { description: 'university', amount: 700, createAt: moment(300), note: "this is a Note(3)" },
    { description: 'apartment', amount: 600, createAt: moment(240), note: "this is a Note(4)" },
    { description: 'child fee', amount: 500, createAt: moment(450), note: "this is a Note(5)" },
    { description: 'bread ', amount: 20, createAt: moment(70), note: "this is a Note(6)" }
]


test('inial test',()=>{
    const wrapper = shallow(<ExpensesSummery selector={expenses}/>)
    expect(toJson(wrapper)).toMatchSnapshot();

})


test('summery expenses testing ', () => {
    const wrapper = shallow(<ExpensesSummery selector={[]} />)
    expect(toJson(wrapper)).toMatchSnapshot();

})
