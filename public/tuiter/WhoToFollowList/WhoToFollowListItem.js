const WhoToFollowListItem = (who) => {
  return `
    <li class="list-group-item">
    <img
        class="wd-avatar-image wd-float-left me-1"
        src=${who.avatarIcon}
    />
    <span class="wd-bold-text wd-small-text">
        ${who.userName}
        <i class="fa fa-check-circle wd-bold-text wd-small-text"></i>
    </span>
    <button
        type="button"
        class="btn btn-primary btn-sm wd-follow-button wd-small-text"
    >
        Follow
    </button>
    <br />
    <span class="wd-small-text">@
    ${who.handle}</span>
    </li>`;
};
export default WhoToFollowListItem;
