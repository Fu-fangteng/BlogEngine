import "../css/BlogCard.css";

function BlogCard({ blog }) {
  function onFavouriteClick() {
    alert("Click");
  }

  return (
    <div className="blog-card">
      <div className="blog-poster">
        <img src={blog.imageUrl} alt={blog.title} />
        <div className="blog-overlay">
          <button className="favorite-btn" onClick={onFavouriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="blog-info">
        <h3>{blog.title}</h3>
        <p>{blog.label}</p>
      </div>
    </div>
  );
}

export default BlogCard;
