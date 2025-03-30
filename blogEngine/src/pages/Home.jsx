import BlogCard from "../components/blogcard";

function Home() {
  const blogs = [
    { id: 1, title: "SVM Intro", label: "MachineLearning_SVM" },
    { id: 2, title: "LR Intro", label: "MachineLearning_LinearRegression" },
    { id: 3, title: "LC Intro", label: "MachineLearning_LInearClassification" },
    { id: 4, title: "PR Intro", label: "MachineLearning_PolynomialRegression" },
  ];

  return (
    <div className="home">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
