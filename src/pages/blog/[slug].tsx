import { getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import React from 'react'
import { memo } from "react"

export const BlogSlug = memo((props) => {
    console.log("🚀 ~ file: [slug].tsx:9 ~ BlogSlug ~ props", props)

    return (
        <div>
            123123
        </div>
    )
})

export default BlogSlug
BlogSlug.displayName = "BlogSlug"



export const getStaticPaths = async () => {
    const posts = await getFiles('blog')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, ''),
            },
        })),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getFileBySlug('blog', params?.slug as string);

    return {
        props: { ...post },
    };
};