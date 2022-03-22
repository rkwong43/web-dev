import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (
    <>
      <div className="row">
        <div className="mb-1 form-row">
          <i className="fa fa-search position-absolute pt-1 ps-2"></i>
          <div className="col-11">
            <input
              className="form-control form-control-sm ps-5"
              id="usernameField"
              type="text"
              placeholder="Search Twitter"
            />
            <a className="ms-1" href="explore-settings.html">
              <i className="fa fa-cog position-absolute end-0 top-0 fs-5"></i>
            </a>
          </div>
        </div>
      </div>
      <ul className="nav mb-2 nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="for-you.html">
            For you
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="trending.html">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sports.html">
            Sports
          </a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a className="nav-link" href="entertainment.html">
            Entertainment
          </a>
        </li>
      </ul>
      <div>
        <img
          className="mt-2"
          style={{ width: "100%" }}
          src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
          alt="Spaceship"
        />
        <span
          className="fw-bold fs-4 ms-4 position-absolute bottom-0 start-0 top-50"
          style={{ color: "white" }}
        >
          SpaceX's Starship
        </span>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
