import React from 'react'
import Home from '../../components/Home'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
configure({ adapter:new Adapter()});



test('HOME PAGE TESTING SnapShot',()=>{
    
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
})