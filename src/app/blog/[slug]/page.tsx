import { getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const post = await getAllPosts().find((p) => p.slug === params.slug)
    if (!post) return notFound()

    const processedContent = await remark().use(html).process(post.content)
    const contentHtml = processedContent.toString()

    return (
        <article className="prose dark:prose-invert mx-auto">
            <h1>{post.metadata.title}</h1>
            <p className="text-sm text-gray-500">{post.metadata.date}</p>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
    )
}
