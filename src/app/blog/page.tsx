import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
    title: 'Blog | Tuan Ho',
    description: 'Danh sách các bài viết chia sẻ kỹ thuật và kinh nghiệm lập trình.',
}

export default async function BlogListPage() {
    const posts = await getAllPosts()

    return (
        <main className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">📚 Bài viết mới nhất</h1>

            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.slug} className="border-b pb-4">
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                                {post.metadata.title}
                            </h2>
                        </Link>
                        <p className="text-sm text-gray-500">{post.metadata.date}</p>
                        <p className="text-gray-700 mt-1">{post.metadata.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}
