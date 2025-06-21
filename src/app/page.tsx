import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { getBlog } from '@/services/blog'
import BlogCard from '@/components/blog/blog.card'
import { Blog } from '@/types'

export const metadata = {
  title: 'Latest Tech & Programming Blogs | Tutorials, Tips & Trends',
  description: 'Explore the latest blogs on technology and programming. Discover coding tutorials, development tips, software tools, and tech trends to stay ahead in the digital world.',
}

export default async function BlogListPage() {
  const blogs = await getBlog('all')

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-7xl font-bold text-center mb-10">Tech Talk Hub</h1>
      <h2 className="text-3xl font-bold mb-6">Latest Tech Blogs</h2>
      {blogs && blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog.blog_slug} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Chưa có bài viết nào.</p>
        </div>
      )}
    </main>
  )
}
