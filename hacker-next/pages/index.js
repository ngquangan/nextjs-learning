import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

const Index = ({ stories, page }) => {
  if (stories.length === 0) return <Error statusCode = { 503 } />;
  return (
    <Layout title = "Hacker Next" description = "Hacker news clone with NextJS">
      <StoryList stories = { stories } />
      <footer>
        <Link href = {`/?page=${page + 1}`}>
          <a>Next page ({page + 1})</a>
        </Link>
      </footer>
      <style jsx>
        {
          `
            footer {
              padding: 1em;
            }
            footer a {
              color: #000;
              font-weight: bold;
              text-decoration: none;
            }
          `
        }
      </style>
    </Layout>
  )
}

Index.getInitialProps = async ({ req, res, query }) => {
  const page = +query.page || 1;
  let stories = [];
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
    stories = await res.json();
  } catch (error) {
    console.log(error);
    stories = [];
  }

  return { stories, page }
}

export default Index;