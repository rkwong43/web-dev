const NavigationSidebar = () => {
  return `
        <div class="list-group">
        <a class="list-group-item" href="/"> <i class="fab fa-twitter"></i></a>
        <a class="list-group-item">
            <i class="fa fa-home" style="color: white"></i> Home
        </a>
        <a class="list-group-item active">
            <i class="fa fa-hashtag" style="color: white"></i> Explore
        </a>
        <a class="list-group-item">
            <i class="fa fa-bell" style="color: white"></i> Notifications
        </a>
        <a class="list-group-item">
            <i class="fa fa-envelope" style="color: white"></i> Messages
        </a>
        <a class="list-group-item">
            <i class="fa fa-bookmark" style="color: white"></i> Bookmarks
        </a>
        <a class="list-group-item">
            <i class="fa fa-list" style="color: white"></i> Lists
        </a>
        <a class="list-group-item">
            <i class="fa fa-user" style="color: white"></i> Profile
        </a>
        <a class="list-group-item">
            <i class="fa fa-ellipsis-h" style="color: white"></i> More
        </a>
        <!-- continue the rest of the list -->
        </div>
        <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill"> Tweet</a>
        </div>
    `;
};
export default NavigationSidebar;
