import React, { Suspense, lazy } from 'react';
import { Router } from "@reach/router";

import TabContainer from './TabContainer';
import NavLink from './NavLink';

import Profile from './Profile';
// import Albums from './Albums';
// import Voting from './Voting';

import Spinner from './Spinner'
import './App.css';

const Albums = lazy(() => import('./Albums'))
const Voting = lazy(() => import('./Voting'))

function App() {
  return (
    <div className="app">
      <h1 className="coldpedia-title">COLDPEDIA</h1>
      <nav>
        <NavLink to="/">Profile</NavLink>
        <NavLink to="albums">Albums</NavLink>
        <NavLink to="voting">Voting</NavLink>
      </nav>
      <TabContainer>
        <Suspense maxDuration={500} fallback={<Spinner />}>
          <Router>
            <Profile path="/" />
            <Albums path="albums" />
            <Voting path="voting" />
          </Router>
        </Suspense>
      </TabContainer>
    </div>
  );
}

export default App;
