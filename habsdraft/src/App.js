import logo from './logo.svg';
import data from './api/nyrehabs.json'
import UserProfile from './rehabs'
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rating">Rate</Link>
      </nav>
      <main>
        <Route exact path="/" component={()=> 'Home Page'} />
        <SecureRoute exact path="/rating" component={()=>'Rating Page'} />
        <Route path="/login/callback" component={LoginCallback} />
      
      <UserProfile data={data} />
      </main>
    </div>
  );
}

export default App;
