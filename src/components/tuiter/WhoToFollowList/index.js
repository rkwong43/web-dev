import WhoToFollowListItem from "./who-to-follow-list-item";
import whos from "./who.json";
const WhoToFollowList = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">Who to follow</li>
        {whos.map((who) => {
          return <WhoToFollowListItem who={who} />;
        })}
      </ul>
    </>
  );
};

export default WhoToFollowList;
