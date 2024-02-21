import Link from "next/link"
import Image from "next/image"

export default function BlogPostCard({ blogPosts }: {blogPosts: any }) {
    console.log(blogPosts)
    const { slug, materialsAndTools, thumbnail, title } = blogPosts.fields
    return (
      <div>
            <h3>{title}</h3>
        <div>
            <Image 
            src={'https:' + thumbnail.fields.file.url}
            width={500}
            height={500}
            alt="blog post"
            />
            
        </div>
        <div>
            <div>
                <p>Verktyg och material: {materialsAndTools.join(', ')}</p>
            </div>
        </div>
        <div>
        <Link href={`/blogPosts/${slug}`}>Läs mer här</Link>
        </div>
      </div>
    )
}