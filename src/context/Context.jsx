import { createContext, useContext, useState, useEffect } from "react";

const Blogs = createContext();

const Context = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  //   console.log("blogs", blogs);

  return <Blogs.Provider value={blogs}>{children}</Blogs.Provider>;
};

export const BlogState = () => {
  return useContext(Blogs);
};

export default Context;
