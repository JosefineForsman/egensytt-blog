
import { createClient } from "contentful"

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
export default function BlogPosts({ blogPosts }: any){
    console.log(blogPosts)
    return(
        <div className="blog-posts-list">
            Blogpost list
        </div>
    )
}