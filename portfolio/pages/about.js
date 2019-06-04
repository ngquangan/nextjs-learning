import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Error from '../pages/_error';

const About = (props) => {

  if (props.statusCode) {
    return <Error statusCode = { props.statusCode }/>
  }

  return (
    <Layout title = "About">
      <p>{ props.user.name }</p>
      <img src = { props.user.avatar } height = { 200} />
    </Layout>
  )
}

About.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/users/ngquangan');
  const statusCode = res.status > 200 ? res.status : false;
  const json = await res.json();
  return { user: { name: json.name, avatar: json.avatar_url }, statusCode};
};


export default About;