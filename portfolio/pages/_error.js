import Layout from '../components/Layout';

export default (props) => (
  <Layout title = "Error!!!">
    <p>{ props.statusCode ?  `Could not load your user data! status code: ${props.statusCode}` : 'Couldn\'t get that page!'}</p>
  </Layout>
)