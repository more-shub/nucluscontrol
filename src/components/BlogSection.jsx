// src/components/BlogSection.jsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./BlogSection.css";

// Helper function to format ISO date string to "YYYY-MM-DD"
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(3); // Show first 3 posts initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your Google Apps Script Web App URL
  const API_URL =
    "https://script.google.com/macros/s/AKfycbzBYYmoTm2O_KwUjEw1xRW2TfcrHhlZrg3a0J2JtXZIhePy4eCP2N8g76CMWW5Iv19P/exec";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  // Show all posts when "Load More" is clicked
  const handleLoadMore = () => {
    setVisiblePosts(blogPosts.length);
  };

  // Makes entire card clickable (unless an inner link is clicked)
  const handleCardClick = (e, url) => {
    if (e.target.closest("a")) return;
    window.open(url, "_blank");
  };

  if (loading) return <div className="blog-loading">Loading...</div>;
  if (error) return <div className="blog-error">Error loading blog posts.</div>;

  return (
    <>
      <Helmet>
        <title>Our Company Blog - NUCLUS CONTROL</title>
        <meta
          name="description"
          content="Read the latest updates and insights from our team at NUCLUS CONTROL."
        />
        <meta
          name="keywords"
          content="blog, company updates, NUCLUS CONTROL, flow measurement"
        />
      </Helmet>
      <div className="blog-container">
        <header className="blog-header">
          <h1>Our Company Blog</h1>
          <p>Latest updates and insights from our team</p>
        </header>
        <section className="blog-section">
          {blogPosts.slice(0, visiblePosts).map((post) => (
            <div
              key={post.ID}
              className="blog-card"
              onClick={(e) => handleCardClick(e, post["Blog Doc URL"])}
            >
              <div className="card-image">
                <img src={post["Image URL"]} alt={post.Title} />
              </div>
              <div className="blog-content">
                <div className="author-info">
                  <img
                    className="author-img"
                    src="/avtar.webp"
                    alt={post.Author}
                  />
                  <span className="author-name">{post.Author}</span>
                </div>
                <div className="meta-info">
                  <span className="date">{formatDate(post.Date)}</span>
                  <span className="tags">{post.Tags}</span>
                </div>
                <h3 className="blog-title">{post.Title}</h3>
                <p className="excerpt">{post.Excerpt}</p>
                <a
                  className="read-more"
                  href={post["Blog Doc URL"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read this post
                </a>
              </div>
            </div>
          ))}
        </section>
        {visiblePosts < blogPosts.length && (
          <button id="loadMoreBtn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default BlogSection;
