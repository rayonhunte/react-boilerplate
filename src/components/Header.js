import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';


export const Header = ({startLogOut}) => (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link to="/dashboard" className="header__title">
            <h1>React Boilerplate</h1>
          </Link>
          <button onClick={startLogOut} className="button button--link">Logout</button>
        </div>
      </div>
    </header>
);

const mapDispatchToProps = (dispatch) =>({
  startLogOut: ()=> dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);