import React ,{ useState, useEffect } from 'react';

import { getUserProfile } from '../lib/auth';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    (
      async () => {
        const profile = await getUserProfile();
        setProfile(profile);
      }
    )();
  }, []);

  return (
    <pre>{ JSON.stringify(profile, null, 2) }</pre>
  )
}

export default Profile;