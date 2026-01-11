// src/components/Blogs.jsx
import React from "react";
import { Link } from "react-router";

const BlogsSection = () => {
  const posts = [
    {
      id: 1,
      title: "How to Prepare for Your First Blood Donation",
      tag: "For Donors",
      readTime: "6 min read",
      excerpt:
        "Nervous about donating for the first time? Learn what to eat, what to avoid, and how to stay relaxed.",
    },
    {
      id: 2,
      title: "Understanding Blood Groups & Compatibility",
      tag: "Education",
      readTime: "8 min read",
      excerpt:
        "A quick guide to blood groups, Rh factors, and why compatibility matters so much during emergencies.",
    },
    {
      id: 3,
      title: "Stories of Hope from Our Community",
      tag: "Stories",
      readTime: "5 min read",
      excerpt:
        "Real experiences from donors and recipients who connected through our platform.",
    },
  ];

  return (
    <section className="py-16 bg-[#d8e2dc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-red-500 mb-2">
              Blog & Resources
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Learn, donate, and inspire others.
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Stay informed with helpful guides, educational resources, and real
              stories from our BloodUnity community.
            </p>
          </div>
          <div className="md:text-right">
            <Link
              to="/blogs"
              className="btn btn-outline border-red-500 text-red-600 hover:bg-red-500 hover:text-white"
            >
              View All Blogs
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all p-6 flex flex-col border border-slate-100"
            >
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="inline-flex px-3 py-1 rounded-full bg-rose-100 text-rose-700 font-semibold">
                  {post.tag}
                </span>
                <span className="text-slate-500">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 hover:text-red-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-slate-600 flex-1 mb-4">
                {post.excerpt}
              </p>
              <Link
                to={`/blogs/${post.id}`}
                className="text-sm font-semibold text-red-600 hover:text-red-700 inline-flex items-center gap-1 mt-auto"
              >
                Read more
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
