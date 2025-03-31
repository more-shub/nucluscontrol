import React, { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import blogData from "../components/blogData.json";
import "../styles/BlogSection.css";

// Utility function to format dates
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

// Memoized BlogCard component to prevent unnecessary re-renders
const BlogCard = memo(({ post }) => {
  return (
    <div className="blog-card" key={post.ID}>
      <div className="blog-content">
        <div className="author-info">
          {/* The static avatar is retained */}
          <img className="author-img" src="/avtar.webp" alt={post.Author} />
          <span className="author-name">{post.Author}</span>
        </div>
        <div className="meta-info">
          <span className="date">{formatDate(post.Date)}</span>
          <span className="tags">{post.Tags}</span>
        </div>
        <h3 className="blog-title">{post.Title}</h3>
        <p className="excerpt">{post.Excerpt}</p>
        <Link to={`/blogs/${post.ID}`} className="read-more">
  Read this post
</Link>
      </div>
    </div>
  );
});

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  // Stable callback for load more action
  const handleLoadMore = useCallback(() => {
    setVisiblePosts(blogData.length);
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - NUCLUS CONTROL</title>
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
          {blogData.slice(0, visiblePosts).map((post) => (
            <BlogCard key={post.ID} post={post} />
          ))}
        </section>
        {visiblePosts < blogData.length && (
          <button id="loadMoreBtn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default BlogSection;
