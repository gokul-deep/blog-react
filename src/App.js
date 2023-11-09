import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./components/blog/Blog";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <Blog posts={posts} />
    </div>
  );
}

export default App;
