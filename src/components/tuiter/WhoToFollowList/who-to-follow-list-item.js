const WhoToFollowListItem = ({
  who = {
    avatarIcon:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0a/8cd7f1b14344618b75142593bc7af8/JavaCupLogo800x800.png?auto=format%2Ccompress&dpr=1",
    userName: "Java",
    handle: "Java",
  },
}) => {
  return (
    <>
      <li className="list-group-item">
        <img
          className="rounded-circle float-start"
          width="48"
          src={who.avatarIcon}
          alt="Avatar"
        />
        <span className="fw-bold float-left ms-2">
          {who.userName}
          <i className="fa fa-check-circle"></i>
        </span>
        <button type="button" className="btn btn-primary btn-sm float-end">
          Follow
        </button>
        <br />
        <span className="ms-2">@{who.handle}</span>
      </li>
    </>
  );
};
export default WhoToFollowListItem;
