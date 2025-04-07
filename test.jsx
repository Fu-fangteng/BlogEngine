import "../css/Favorites.css";
import { useBlogContext } from "../context/BlogContext";
import BlogCard from "../../../test";

function Favorites() {
  // const { favorites } = useBlogContext();

  // if (favorites) {
  //   return (
  //     <div className="favorites">
  //       <h2>Your Favorites Blogs!</h2>
  //       {/* <div className="blog-grid">
  //         {favorites.map((blog) => (
  //           <BlogCard blog={blog} key={blog.id} />
  //         ))}
  //       </div> */}
  //     </div>
  //   );
  // }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Blogs yet</h2>
      <p>Start add blogs to your favorite and they will appear here.</p>
    </div>
  );
}

export default Favorites;
