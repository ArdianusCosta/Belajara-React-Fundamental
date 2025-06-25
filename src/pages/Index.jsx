import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [totalPosts, setTotalPosts] = useState(postsData.length); 
  const [posts, setPosts] = useState(postsData);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) 
    );

    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.length > 0 ? (
        posts.map((props, index) => <Article key={index} {...props} />)
      ) : (
        <p>Tidak ada artikel ditemukan.</p>
      )};
    </>
  );
}

export default Homepage;
