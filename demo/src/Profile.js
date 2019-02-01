import React, { Component } from 'react';
import { unstable_createResource } from 'react-cache';

import Spinner from './Spinner';
import fetchAPI from './fetchAPI';

const profileResource = unstable_createResource((item) => {
  return fetchAPI(`/profile/${item}`)
})

class Profile extends Component {
  // state = {
  //   profilePicture: null,
  //   intro: null,
  // }

  // componentDidMount() {
  //   // fetch profile picture and text content
  //   fetchAPI('/profile/photo').then((profilePicture) => {
  //     this.setState({ profilePicture });
  //   });
  //   fetchAPI('/profile/intro').then((intro) => {
  //     this.setState({ intro });
  //   })
  // }

  render() {
    // const { profilePicture, intro } = this.state;
    const profilePicture = profileResource.read('photo')
    const intro = profileResource.read('intro')
    return (
      <>
        <div className="profile-picture">
          {/* {profilePicture ? ( */}
            <img src={profilePicture} alt="IloveColdplay" />
          {/* ) : <Spinner />} */}
        </div>
        <div className="profile-intro">
          {/* {intro ? ( */}
            { intro.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            )) }
          {/* ) : <Spinner />} */}
        </div>
      </>
    );
  }
}

export default Profile

// import React from 'react';
// import { unstable_createResource } from 'react-cache';

// import fetchAPI from './fetchAPI';

// const profileResource = unstable_createResource((item) => {
//   return fetchAPI(`/profile/${item}`);
// });

// function Profile() {
//   const profilePicture = profileResource.read('photo');
//   const intro = profileResource.read('intro');

//   return (
//     <>
//       <div className="profile-picture">
//         <img src={profilePicture} alt="IloveColdplay" />
//       </div>
//       <div className="profile-intro">
//         {intro.split('\n').map((para, index) => (
//           <p key={index}>{para}</p>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Profile;
