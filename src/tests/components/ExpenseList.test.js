import React from 'react'

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import { expenses , filter } from '../fixture-data'
import { ExpenseList} from '../../components/ExpenseList'




test('this is a fixture Data' , ()=>{

    const wrapper = shallow(<ExpenseList selector={expenses}  filter={filter}/>);
    expect(wrapper).toMatchSnapshot();

    
})

test('this is a fixture Data empty array', () => {

    const wrapper = shallow(<ExpenseList selector={[]} filter={filter} />);
    expect(wrapper).toMatchSnapshot();
})