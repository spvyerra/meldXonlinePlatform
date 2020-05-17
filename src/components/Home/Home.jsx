import React from 'react';
import { Jumbotron } from 'reactstrap';

import { NavLink } from 'react-router-dom';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello!</h1>
        <p className="lead">Welcome to Meld Exchange.</p>
        <hr className="my-2" />
        <p>I am a business</p>
        <p className="lead">
          <NavLink to="/business/sign-in">
            sign in
          </NavLink>
          <NavLink to="/business/sign-up">
            sign up
          </NavLink>
        </p>
        <p>I am an investor</p>
        <p className="lead">
          <NavLink to="/investor/sign-in">
            sign in
          </NavLink>
          <NavLink to="/investor/sign-up">
            sign up
          </NavLink>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
