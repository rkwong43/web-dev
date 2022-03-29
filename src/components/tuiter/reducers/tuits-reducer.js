import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    case "delete-tuit":
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case "create-tuit":
      const currTime = new Date().getTime();
      const newTuit = {
        tuit: action.tuit,
        _id: currTime + "",
        time: "Now",
        postedBy: {
          username: "ReactJS",
        },
        userName: "User",
        stats: {
          retuits: 0,
          likes: 0,
          replies: 0,
        },
      };
      return [newTuit, ...state];
    default:
      return tuits;
  }
};

export default tuitsReducer;
