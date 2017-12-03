import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';


let startLogin, wrapper;


beforeEach(()=>{
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin}/>);
});


test('should render login', ()=>{
  expect(wrapper).toMatchSnapshot();
});





test('test login',()=>{
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalledWith();  
});