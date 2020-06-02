import React from 'react';
import { Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello!</h1>
        <p className="lead">Welcome to Meld Exchange.</p>
        <hr className="my-2" />
        <p>I am a: </p>
        <NavLink to="/business">
          business<br />
        </NavLink>
        <NavLink to="investor">
          investor
        </NavLink> 
        <hr className="my-2" />
        <br />
        <h2 className="lead"> Buisnesses on MeldX</h2>     
      </Jumbotron>
    </div>
  );
};

export default Home;
