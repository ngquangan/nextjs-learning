import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <>
    {
      comments.map(comment => {
        return (
          <Comment key = {comment.id} comment = { comment }/>
        )
      })
    }
    </>
  );
}

export default CommentList;