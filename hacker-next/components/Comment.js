const Comment = ({ comment }) => {
  return (
    <div className = "comment">
      <div className = "comment__user">{ comment.user }</div>
      <div className = "comment__content" dangerouslySetInnerHTML = {{ __html: comment.content }}></div>
      {comment.comments && (
        <div className = "comment__nested">
          {
            comment.comments.map(nestedComment => {
              return <Comment key = {nestedComment.id} comment = {nestedComment}/>
            })
          }
        </div>
      )}
      <style jsx>
        {
          `
            .comment {
              margin-bottom: 1.5rem;
            }
            .comment__user {
              font-size: 0.9rem;
              font-weight: bold;
              margin-bottom: 0.5em;
            }
            .comment__content {
              font-size: 0.9rem;
            }
            .comment__content :global(p) {
              margin: 0;
              margin-bottom: 0.5em;
              word-wrap: break-word;
            }
            .comment__content :global(a) {
              color: #f60;
              text-decoration: underline;
            }
            .comment__content :global(pre) {
              max-width: 100%;
              overflow: scroll;
            }
            .comment__nested {
              margin-top: 1em;
              border-left: 1px solid rgba(0, 0, 0, 0.1);
              padding-left: 1em;
            }
          `
        }
      </style>
    </div>
  )
}

export default Comment;