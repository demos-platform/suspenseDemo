import React from 'react';
import { unstable_createResource } from 'react-cache'
import fetchAPI from '../fetchAPI';

const resource = unstable_createResource((name) => {
  return fetchAPI(`/inActivity/${name}`)
})

function InActivity() {
  const inActivity = resource.read('photo')
  const intro = resource.read('intro')
  return (
    <>
      <div className="inActivity-picture">
        <img src={inActivity} alt="活动中" />
      </div>
      <div>
        {
          intro.split('\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))
        }
      </div>
    </>
  );
}

export default InActivity
