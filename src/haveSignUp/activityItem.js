import React, { Component } from 'react';
import Spinner from '../Spinner';
import fetchAPI from '../fetchAPI';

export default class ActivityItem extends Component {
  state = {
    info: null,
  };

  componentDidMount() {
    fetchAPI(`/haveSignUp/${this.props.id}`).then((info) => {
      this.setState({ info });
    });
  }

  render() {
    const { info } = this.state;

    if (info == null) {
      return <Spinner />;
    }

    const {
      name,
      releasedDate,
      signup,
      cover,
      notes,
    } = info;

    return (
      <section key={name} className="signup">
        <div className="signup-cover-container">
          <img src={cover} alt="cover" />
        </div>
        <div className="signup-info">
          <h3>{name}</h3>
          <p>{releasedDate}</p>
          <p>{signup}</p>
          <p>{notes}</p>
        </div>
      </section>
    );
  }
}