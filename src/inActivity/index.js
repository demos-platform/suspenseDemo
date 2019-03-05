import React, { Component } from 'react';

import Spinner from '../Spinner';
import fetchAPI from '../fetchAPI';

class InActivity extends Component {
  state = {
    inActivity: null,
    intro: null,
  }

  componentDidMount() {
    fetchAPI('/inActivity/photo').then((inActivity) => {
      this.setState({ inActivity });
    });
    fetchAPI('/inActivity/intro').then((intro) => {
      this.setState({ intro });
    })
  }

  render() {
    const { inActivity, intro } = this.state;
    return (
      <>
        <div className="inActivity-picture">
          {inActivity ? (
            <img src={inActivity} alt="活动中" />
          ) : <Spinner />}
        </div>
        <div>
          {intro ? (
            intro.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))
          ) : <Spinner />}
        </div>
      </>
    );
  }
}

export default InActivity
