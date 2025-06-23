import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(postsData.length); 
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) 
    );

    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setExternalPosts(json))
  });

  useEffect(() => {
    console.log("ada data baru");
  }, [posts]);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.length > 0 ? (
        posts.map((props, index) => <Article key={index} {...props} />)
      ) : (
        <p>Tidak ada artikel ditemukan.</p>
      )};
      <hr/>
        <h2>External Posts</h2>
        {externalPosts.map((item, index) => (
            <div key={index}>- {item.title}</div>
        ))}
    </>
  );
}

export default Homepage;
