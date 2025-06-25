'use client'
import { useEffect, useState } from "react";
import BlogCard from "@/components/blog/blog.card";
import { getBlog } from "@/services/blog";
import { Blog } from "@/types";
import { useParams } from "next/navigation";


const Page = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const params = useParams<{ slug: string }>();
    useEffect(() => {
        const fetchBlogs = async () => {
            const res: Blog[] = await getBlog('all');
            const filteredBlogs = res.filter((blog) => {
                console.log(blog.blog_slug.toLowerCase(), params.slug.toLowerCase())
                return blog.blog_slug.toLowerCase().includes(params.slug.toLowerCase())
            }

            );
            setBlogs(filteredBlogs);
        };
        fetchBlogs();
    }, [params.slug]);

    // Mock Blog Data (Replace with actual data fetching)

    return (
        <main className='min-h-[50vh]'>
            <div className="container mx-auto py-8 px-4 sm:px-6">
                <h1 className="text-2xl font-bold mb-4">Search Results for "{params.slug}"</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {blogs?.length > 0 ? (
                        blogs?.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </main>

    );
}
export default Page;