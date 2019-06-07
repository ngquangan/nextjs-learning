import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

const Story = ({ story }) => {

  if (!story) return <Error statusCode = { 503 }/>

  return (
    <Layout title = { story.title } backButton = {true}>
      <main className = "story">
        <h1 className = "story__title"><a href = {story.url}>{ story.title }</a></h1>
        <div className = "story__detail">
          <strong>{ story.points } points {" "}</strong>
          <strong>{ story.comments_count } comments {" "}</strong>
          <strong>{ story.time_ago }</strong>
        </div>
        <div className = "story__comment">
          {
            story.comments.length > 0 ? (
              <CommentList comments = {story.comments} />
            ) : (
              <div>No comments for this story</div>
            )
          }
        </div>
      </main>
      <style jsx>
        {
          `
            .story {
              padding: 1em;
            }
            .story__title {
              font-size: 1.2rem;
              margin: 0;
              font-weight: 300;
              padding-bottom: 0.5em;
            }
            .story__title a {
              color: #333;
              text-decoration: none;
            }
            .story__title a:hover {
              text-decoration: underline;
            }
            .story__detail {
              font-size: 0.8rem;
              padding-bottom: 1em;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 1em;
            }
            .story__detail strong{
              margin-right: 1em;
            }
            .story__detail a{
              color: #f60;
            }
          `
        }
      </style>
    </Layout>
  )
}

Story.getInitialProps = async ({ req, res, query }) => {
  const storyId = query.id;

  let story = null;

  try {
    const resp = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
    story = await resp.json();
  } catch (error) {
    console.log(error);
    story = null;
  }

  return {
    story
  }

}

export default Story;