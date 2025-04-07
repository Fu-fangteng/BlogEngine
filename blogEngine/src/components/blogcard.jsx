import "../css/BlogCard.css";
import { useBlogContext } from "../context/BlogContext";

function BlogCard({ blog }) {
  const { isFavorite, addFavs, removeFavs } = useBlogContext();
  const favorite = isFavorite(blog.id);

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favorite) removeFavs(blog.id);
    else addFavs(blog);
  }

  return (
    <div className="blog-card">
      <div className="blog-poster">
        <img src={blog.imageUrl} alt={blog.title} />
        <div className="blog-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
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
