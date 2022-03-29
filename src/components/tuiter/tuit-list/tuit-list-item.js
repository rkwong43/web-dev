import { useDispatch } from "react-redux";
import TuitStats from "../home-screen/tuit-stats";
const TuitListItem = ({
  key = "123",
  tuit = {
    _id: "123",
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({ type: "delete-tuit", tuit });
  };

  // Taken from previous post summary item component
  return (
    <div className="list-group">
      <div className="list-group-item">
        <i
          onClick={() => deleteTuit(tuit)}
          className="fa fa-solid fa-comment-slash fa-remove fa-pull-right"
          style={{ color: "white" }}
        ></i>
        <img src={tuit.image} className="float-end" width="48" alt="" />
        <p className="fw-light m-0 float-left">{tuit.topic} </p>
        <p className="fw-bold m-0">
          {tuit.userName} <i className="fa fa-check-circle"></i>
          <span className="fw-light"> - {tuit.time}</span>
        </p>
        <p className="fw-bold m-0">{tuit.title}</p>
        <p className="fw-lighter m-0">{tuit.tuit}</p>
        {tuit.tweets && <p className="fw-light">{tuit.tweets} Tweets</p>}
        <div className="container">
          <div class="row align-items-start">
            <div className="col">
              <i className="fa fa-comment"></i> {tuit.stats.replies}
            </div>
            <div className="col">
              <i className="fa fa-share"></i> {tuit.stats.retuits}
            </div>
            <div className="col">
              <TuitStats tuit={tuit} />
            </div>
            <div className="col">
              <i className="fa fa-inbox ms-5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TuitListItem;
