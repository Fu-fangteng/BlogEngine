import "../css/BlogCard.css";

function BlodCard({ blog }) {
  function onFavouriteClick() {
    alert("Click");
  }

  return (
    <div className="blog-card">
      <div className="blog-poster">
        <img src={blog.url} alt={blog.title} />
        <div className="blog-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
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

export default BlodCard;
