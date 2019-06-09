import React ,{ useState, useEffect } from 'react';

import { getUserProfile } from '../lib/auth';
import Layout from '../components/Layout';

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
    <Layout title = "Profile">
      <pre>{ JSON.stringify(profile, null, 2) }</pre>
    </Layout>
  )
}

export default Profile;