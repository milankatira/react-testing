import React from "react";
import { shallow } from 'enzyme';
import Header from "./Header";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from '../../../utils/index';
Enzyme.configure({ adapter: new Adapter() });

const setup=(props={})=>{
    const component = shallow(<Header {...props} />);
    return component;
}


describe('header component',()=>{

    let component;
    beforeEach(() => {
        component = setup();
    })
  it('is should render without error',()=>{
        const wrapper = findByTestAttr(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    })
})