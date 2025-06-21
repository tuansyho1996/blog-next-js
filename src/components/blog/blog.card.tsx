// components/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types';


export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blog/${blog.blog_slug}`} className="group">
            <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition hover:opacity-70">
                <Image
                    src={blog.blog_image}
                    alt={blog.blog_title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                />
                <div className="p-4 bg-[var(--subbackground)]">
                    <h2 className="text-xl font-semibold mb-2">{blog.blog_title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
                    <p className="line-clamp-2">{blog.blog_content}</p>
                </div>
                <div className="p-4 bg-[var(--reversebackground)] text-center">
                    <span className="text-xl text-white">Read more</span>
                </div>
            </div>
        </Link>
    );
}
