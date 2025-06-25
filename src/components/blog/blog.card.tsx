// components/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types';


export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blog/${blog.blog_slug}`} className="group">
            <div className="flex border rounded-xl overflow-hidden shadow hover:shadow-lg transition hover:opacity-90">

                <div className="p-4 bg-[var(--subbackground)] basis-1/2">
                    <h2 className="text-xl font-semibold mb-2">{blog.blog_title}</h2>
                    <p className="text-sm text-gray-500 mb-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
                    <div className='inline' dangerouslySetInnerHTML={{ __html: blog.blog_content.slice(0, 160) + ' ... read more' }} />
                </div>

                <Image
                    src={blog.blog_image}
                    alt={blog.blog_title}
                    width={400}
                    height={300}
                    className="w-full h-full max-h-64 object-cover group-hover:scale-105 transition-transform basis-1/2"
                    loading="lazy"
                />
            </div>
        </Link>
    );
}
