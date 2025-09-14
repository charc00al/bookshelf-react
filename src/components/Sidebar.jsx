
function Sidebar() {
    return (
          <div class="sidebar">
        <form class="bookshelf-search" action="">
            <input type="text" name="input" placeholder="search bookshelf"/>
            <button class="btn" type="submit"></button>
        </form>
        <div class="sidebar-text">
            <div class="sidebar-text-chunk">
                <h4>Status</h4>
                <p>All Books</p>
                <p>Reading</p>
                <p>Wishlist</p>
                <p>Finished books</p>
            </div>
            <div class="sidebar-text-chunk">
                <h4>Sort by</h4>
                <p>Date</p>
                <p>Reviews</p>
                <p>Status</p>
            </div>
            <div class="sidebar-text-chunk">
                <h4>View</h4>
                <p>Tiles</p>
                <p>Content</p>
            </div>
        </div>
    </div>
    )
}

export default Sidebar