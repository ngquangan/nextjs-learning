import fetch from 'isomorphic-fetch';
import Error from 'next/error';

const Index = (props) => {
  if (props.stories.length === 0) return <Error statusCode = { 503 } />;
  return (
    <div>
      <h1>Hacker next</h1>
      <div>
        { props.stories.map(story => (
          <h3 key = { story.id } >{ story.title }</h3>
        )) }
      </div>
    </div>
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