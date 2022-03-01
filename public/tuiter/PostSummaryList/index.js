import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.js";
const PostSummaryList = () => {
  return `
            <ul class="list-group">
            ${posts
              .map((post) => {
                return PostSummaryItem(post);
              })
              .join("")}
            </ul>
`;
};

export default PostSummaryList;
