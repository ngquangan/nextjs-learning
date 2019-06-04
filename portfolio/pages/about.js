import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title = "About">
      <Link href = "/">
        <a>Home</a>
      </Link>
      <p>This is about page</p>
      <img src = "/static/logo.png" height = { 200} />
    </Layout>
  )
}

export default About;