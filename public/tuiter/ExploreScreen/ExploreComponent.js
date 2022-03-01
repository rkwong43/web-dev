import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
        <div class="row">
        <div class="mb-1">
            <i class="fa fa-search position-absolute pt-1 ps-2"></i>
            <input
            class="wd-search-bar ps-5"
            id="usernameField"
            type="text"
            placeholder="Search Twitter"
            />
            <!--Settings-->
            <a class="wd-settings" href="explore-settings.html">
            <i class="fa fa-cog"></i>
            </a>
        </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="wd-image-box">
        <span class="wd-image-text position-absolute ms-1">SpaceX's Starship</span>
        <img
            class="mt-2"
            style="width: 100%"
            src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
        />
        </div>
        ${PostSummaryList()}
    `;
};
export default ExploreComponent;
