import { createContext, useState, useContext, useEffect } from "react";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavs = (blog) => {
    setFavorites((prev) => [...prev, blog]);
  };
  const removeFavs = (blogId) => {
    setFavorites((prev) => prev.filter((blog) => blog.id !== blogId));
  };

  const isFavorite = (blogId) => {
    return favorites.some((blog) => blog.id == blogId);
  };

  const value = {
    favorites,
    addFavs,
    removeFavs,
    isFavorite,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
