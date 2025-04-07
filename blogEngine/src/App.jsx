import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import { BlogProvider } from "./context/BlogContext";
import BlogCard from "./components/blogcard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BlogProvider>
      <NavBar></NavBar>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </BlogProvider>
  );
}

export default App;
