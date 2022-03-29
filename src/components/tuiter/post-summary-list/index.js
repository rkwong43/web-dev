import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json";
const PostSummaryList = () => {
  return (
    <>
      <ul class="list-group">
        {posts.map((post) => {
          return <PostSummaryItem item={post} />;
        })}
      </ul>
    </>
  );
};

export default PostSummaryList;
