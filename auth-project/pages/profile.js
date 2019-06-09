import React ,{ useState, useEffect } from 'react';
import { authInitialProps } from '../lib/auth';

import { getUserProfile } from '../lib/auth';
import Layout from '../components/Layout';

const Profile = (props) => {
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
    <Layout title = "Profile" {...props}>
      <pre>{ JSON.stringify(profile, null, 2) }</pre>
    </Layout>
  )
}

Profile.getInitialProps = authInitialProps(true);

export default Profile;