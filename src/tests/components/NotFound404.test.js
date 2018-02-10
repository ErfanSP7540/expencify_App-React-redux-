import React from 'react'
import NotFound404 from '../../components/NotFound404'

import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
configure({ adapter:new Adapter()});



test('404 PAGE TESTING SnapShot',()=>{
    
    const wrapper = shallow(<NotFound404 />);
    expect(wrapper).toMatchSnapshot();
})