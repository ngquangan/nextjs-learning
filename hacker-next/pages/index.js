import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

const Index = (props) => {
  if (props.stories.length === 0) return <Error statusCode = { 503 } />;
  return (
    <Layout title = "Hacker Next" description = "Hacker news clone with NextJS">
      <StoryList stories = { props.stories } />
    </Layout>
  )
}

Index.getInitialProps = async () => {
  let stories = [];
  try {
    const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
    stories = await res.json();
  } catch (error) {
    console.log(error);
    stories = [];
  }

  return { stories }
}

export default Index;