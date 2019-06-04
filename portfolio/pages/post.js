import Layout from '../components/Layout';

import { withRouter } from 'next/router';

const Post = ({ router }) => {
  return (
    <Layout title = { router.query.title } >
      <p>Culpa id occaecat magna aliquip pariatur magna ex ad veniam mollit ex velit fugiat.Occaecat cillum laboris mollit nostrud proident cupidatat veniam duis aliquip laboris.</p>
    </Layout>
  )
}

export default withRouter(Post);