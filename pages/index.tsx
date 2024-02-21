import BlogPostCard from "@/components/BlogPostCard"
import { createClient } from "contentful"
import { BlogPostsProps } from "@/types"

export async function getStaticProps(){
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID as string,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
    })

    const res = await client.getEntries({ content_type: 'blogPost' })

    return {
        props: {
            blogPosts: res.items
        }
    }
}
export default function BlogPosts({ blogPosts }: BlogPostsProps){
    console.log(blogPosts)
    return(
        <div className="blog-posts-list">
            { blogPosts.map(post => (
                <BlogPostCard key={post.sys.id} blogPosts={post}/>
            ))}
        </div>
    )
}