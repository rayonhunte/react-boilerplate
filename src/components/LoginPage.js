import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from '../actions/auth';

export const  LoginPage = ({startLogin})=> {
  return (
      <div className="box-layout">
          <div className="box-layout__box">
            <h1 className="layout__title">React Boilerplate</h1>
            <p>Tag Line For App !!!</p>
            <button onClick={startLogin} className="button">Login With Google</button>
          </div>
      </div>
    );
  
};

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);