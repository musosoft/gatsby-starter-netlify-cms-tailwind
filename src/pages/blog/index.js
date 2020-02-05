import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const BlogIndexPage = () => (
  <Layout>
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/img/blog-index.jpg')",
      }}
    >
      <h1
        className="font-bold"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        Latest Stories
      </h1>
    </div>
    <section className="section">
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogIndexPage;
