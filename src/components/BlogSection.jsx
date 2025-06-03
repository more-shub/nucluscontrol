import React, { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import blogData from "../components/blogData.json";
import "../styles/BlogSection.css";

// Format date as YYYY-MM-DD
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

// Memoized blog card
const BlogCard = memo(({ post }) => {
  return (
    <article className="blog-card" key={post.ID} itemScope itemType="https://schema.org/BlogPosting">
      <div className="blog-content">
        <div className="author-info">
          <img className="author-img" src="/avtar.webp" alt={post.Author} itemProp="image" />
          <span className="author-name" itemProp="author">{post.Author}</span>
        </div>
        <div className="meta-info">
          <time className="date" itemProp="datePublished" dateTime={formatDate(post.Date)}>
            {formatDate(post.Date)}
          </time>
          <span className="tags" itemProp="keywords">{post.Tags}</span>
        </div>
        <h3 className="blog-title" itemProp="headline">{post.Title}</h3>
        <p className="excerpt" itemProp="description">{post.Excerpt}</p>
        <Link to={`/blogs/${post.ID}`} className="read-more" itemProp="url">
          Read this post
        </Link>
      </div>
    </article>
  );
});

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const handleLoadMore = useCallback(() => {
    setVisiblePosts(blogData.length);
  }, []);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "NUCLUS CONTROL Blog",
    "url": "https://yourdomain.com/blogs",
    "description": "Read the latest updates and insights from our team at NUCLUS CONTROL.",
    "blogPost": blogData.slice(0, visiblePosts).map((post) => ({
      "@type": "BlogPosting",
      "headline": post.Title,
      "author": { "@type": "Person", "name": post.Author },
      "datePublished": formatDate(post.Date),
      "description": post.Excerpt,
      "url": `https://yourdomain.com/blogs/${post.ID}`
    }))
  };

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
          content="blog, company updates, NUCLUS CONTROL, flow measurement, industrial insights"
        />
        <meta property="og:title" content="Blog - NUCLUS CONTROL" />
        <meta property="og:description" content="Insights from NUCLUS CONTROL team on products, technology, and industry trends." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blogs" />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <main id="blog" className="blog-container">
        <header className="blog-header">
          <h1>Our Company Blog</h1>
          <p>Latest updates and insights from our team</p>
        </header>
        <section className="blog-section" aria-label="Blog Posts">
          {blogData.slice(0, visiblePosts).map((post) => (
            <BlogCard key={post.ID} post={post} />
          ))}
        </section>
        {visiblePosts < blogData.length && (
          <div className="load-more-container">
            <button
              id="loadMoreBtn"
              onClick={handleLoadMore}
              aria-label="Load more blog posts"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default BlogSection;
