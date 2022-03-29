const PostSummaryItem = ({
  item = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
}) => {
  return (
    <div className="list-group">
      <div className="list-group-item">
        <img src={item.image} className="float-end" width="48" alt="Summary" />
        <p className="fw-light m-0 float-left">{item.topic} </p>
        <p className="fw-bold m-0">
          {item.userName} <i className="fa fa-check-circle"></i>
          <span className="fw-light"> - {item.time}</span>
        </p>
        <p className="fw-bold m-0">{item.title}</p>
        {item.tweets && <p className="fw-light">{item.tweets} Tweets</p>}
      </div>
    </div>
  );
};
export default PostSummaryItem;
