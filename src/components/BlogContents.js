import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

console.log({ createClient });
function BlogContents() {
  const [posts, setPosts] = useState([]);
  console.log("test");

  const client = createClient({
    space: "vj4sbs6zarkd",
    accessToken: "DPZRVwZ54Jm7bhtAL9G4EIybYeqg9gH2lIZzmqAtI0w",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blog", // Replace with your content type ID
        });
        console.log({ response });
        setPosts(response.items);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchPosts();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="blog-container container">
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id} className="blog-post">
            <div className="content-header">
              <h2>{post.fields.title}</h2>
            </div>
            <div className="blog-content">
              {post.fields.image && (
                <img
                  src={post.fields.image.fields.file.url}
                  alt={post.fields.image.fields.description}
                  className="blog-image"
                  // style={{ height: "300px", width: "400px" }}
                />
              )}
              <div className="blog-text">
                <div className="meta" style={{ display: "flex", gap: "10px" }}>
                  <p>By: {post.fields.author}</p>
                  <p>On: {post.fields.date}</p>
                </div>
                <p className="truncate">
                  {truncateText(post.fields.body, 200)}
                </p>
                <Link to={`/readmore/${post.sys.id}`}>
                  <button className="app_btn">Read More</button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogContents;
