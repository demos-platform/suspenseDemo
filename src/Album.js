import React, { Component } from 'react';
import { unstable_createResource } from 'react-cache'
import Spinner from './Spinner';
import fetchAPI from './fetchAPI';

const resource = unstable_createResource((id) => {
  return fetchAPI(`/albums/${id}`)
})

export default class Album extends Component {
  // state = {
  //   album: null,
  // };

  // componentDidMount() {
  //   fetchAPI(`/albums/${this.props.id}`).then((album) => {
  //     this.setState({ album });
  //   });
  // }

  render() {
    // const { album } = this.state;
    const album = resource.read(this.props.id)

    // if (album == null) {
    //   return <Spinner />;
    // }

    const {
      name,
      releasedDate,
      numberOfSongs,
      duration,
      cover,
      notes,
    } = album;

    return (
      <section key={name} className="album">
        <div className="album-cover-container">
          <img src={cover} alt="cover" />
        </div>
        <div className="album-info">
          <h3>{name}</h3>
          <p>{releasedDate}</p>
          <p>{numberOfSongs} Songs, {duration}</p>
          <p>{notes}</p>
        </div>
      </section>
    );
  }
}