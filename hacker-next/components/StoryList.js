import Link from 'next/link';

const StoryList = (props) => {
  return (
    <div className = "story">
        { props.stories.map(story => (
          <div className = "story__item" key = { story.id }>
            <h3 className = "story__title" ><a href = { story.url }>{ story.title }</a></h3>
            <div className = "story__detail">
              <span>{ story.points || 0 } points {" "}</span>
              <Link href = { `/story?id=${story.id}` }>
                <a>
                  { story.comments_count || 0 } comments
                </a>
              </Link>
            </div>
          </div>
        )) }
        <style jsx>
          {
            `
              .story {
                padding: 0 1em;
              }
              .story__title {
                font-size: 1rem;
                font-weight: 400;
                margin: 0;
                margin-bottom: 0.5em;

              }
              .story__title a {
                color: #333;
                text-decoration: none;
              }
              .story__title a:hover, .story__detail a:hover {
                text-decoration: underline;
              }
              .story__detail {
                font-size: 0.8rem;
                font-weight: bold;
              }
              .story__detail span{
                margin-right: 1rem;
              }

              .story__detail a{
                color: #6600ff;
                text-decoration: none;
              }
            `
          }
        </style>
      </div>
  )
}

export default StoryList;