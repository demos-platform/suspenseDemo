import React, { Suspense, lazy } from 'react';
import { Router } from "@reach/router";

import TabContainer from './TabContainer';
import NavLink from './NavLink';

import InActivity from './inActivity';

import Spinner from './Spinner'

import './App.css';

const HaveSignUp = lazy(() => import('./haveSignUp'))
const RecommendActivity = lazy(() => import('./recommendActivity'))
const MockSuspense = lazy(() => import('./suspense'))

function App() {
  return (
    <div className="app">
      <h1 className="duoduo-title"><span className="duoduo-title-name">多多营销后台</span></h1>
      <div className="body">
        <nav>
          <NavLink to="/">活动中</NavLink>
          <NavLink to="signup">已报名</NavLink>
          <NavLink to="recommend/activity">推荐活动</NavLink>
          <NavLink to="suspense">MockSuspense</NavLink>
        </nav>
        <TabContainer>
          <Suspense fallback={<Spinner />} maxDuration={500}>
            <Router>
              <InActivity path="/" />
              <HaveSignUp path="signup" />
              <RecommendActivity path="recommend/activity" />
              <MockSuspense path="suspense" />
            </Router>
          </Suspense>
        </TabContainer>
      </div>
    </div>
  );
}

export default App;
