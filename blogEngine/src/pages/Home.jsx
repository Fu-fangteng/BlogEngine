import BlogCard from "../components/blogcard";
import { useEffect, useState } from "react";
import { searchBlogs, getPopularBlogs } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  //   const [blogs, setBlogs] = useState([]);
  //   const [err, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const loadPopularBlogs = async () => {
  //       try {
  //         const popularBlogs = await getPopularBlogs();
  //         setBlogs(popularBlogs);
  //       } catch (err) {
  //         console.log(err);
  //         setError("Failed to load Movies...");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //   });

  const blogs = [
    { id: 1, title: "SVM Intro", label: "MachineLearning_SVM" },
    { id: 2, title: "LR Intro", label: "MachineLearning_LinearRegression" },
    { id: 3, title: "LC Intro", label: "MachineLearning_LInearClassification" },
    { id: 4, title: "PR Intro", label: "MachineLearning_PolynomialRegression" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
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

      <div className="blog-grid">
        {blogs.map(
          (blog) =>
            blog.title.toLowerCase().startsWith(searchQuery) && (
              <BlogCard blog={blog} key={blog.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
