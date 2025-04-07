import BlogCard from "../components/blogcard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularBlogs, searchBlogs } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getPopularBlogs();
        setBlogs(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load Blogs...");
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResult = searchBlogs(searchQuery);
      setBlogs(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies....");
    } finally {
      setLoading(false);
    }

    // Use to set search bar into empty
    // setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for bolg ..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="blog-grid">
          {blogs.map(
            (blog) =>
              blog.title.toLowerCase().startsWith(searchQuery) && (
                <BlogCard blog={blog} key={blog.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
