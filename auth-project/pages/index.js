import Layout from "../components/Layout";

import { authInitialProps } from '../lib/auth';

const Home = (props) => {
  return (
    <Layout title = "Home" { ...props }>
      <div>Test 123</div>
    </Layout>
  )
}

Home.getInitialProps = authInitialProps();

export default Home;