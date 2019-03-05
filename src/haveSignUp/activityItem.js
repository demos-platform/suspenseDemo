import React from 'react';
import { unstable_createResource } from 'react-cache'
import fetchAPI from '../fetchAPI';

const resource = unstable_createResource((id) => {
  return fetchAPI(`/haveSignUp/${id}`)
})

function ActivityItem(props) {
  const info = resource.read(props.id)
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

export default ActivityItem