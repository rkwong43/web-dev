const PostSummaryItem = (item) => {
  return `
    <div class="card-body wd-card-box">
    <img
        src=${item.image}
        class="wd-card-img"
    />ss
    <p class="card-text wd-faded-text wd-small-text m-0">
        ${item.topic}
    </p>
    <p class="card-text wd-bold-text wd-small-text m-0">
        ${item.userName}
        <i class="fa fa-check-circle wd-bold-text wd-small-text"></i>
        <span class="card-text wd-faded-text wd-small-text wd-clear-bold"
        >- ${item.time}</span>
    </p>
    <p class="card-text wd-small-text wd-bold-text m-0">
        ${item.title}
    </p>
    <p class="card-text wd-faded-text wd-small-text m-0">${item.tweets} Tweets</p>
    </div>`;
};
export default PostSummaryItem;
