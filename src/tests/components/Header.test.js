import React from 'react'
import Header from '../../components/Header'

import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('should renfer header correctly',()=>{

    const wrapper = shallow(<Header />);

    expect( wrapper.find('h1').text() ).toBe('Header Text')
    expect(wrapper).toMatchSnapshot();
    
})

