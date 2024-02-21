import { createClient } from "contentful"
import Image from "next/image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
})
export const getStaticPaths = async () => {
    const res = await client.getEntries({ content_type: 'blogPost' })

    const paths = res.items.map(item =>{
        return{
            params: {slug: item.fields.slug}
        }
    })
    return{
        paths,
        fallback: false
    }
}
//TODO: change to the right prop type.
export async function getStaticProps({params}:any){
const {items} = await client.getEntries({ 
    content_type: 'blogPost', 
    'fields.slug': params.slug 
})
return {
    props: { blogPost: items[0]}
}
}

//TODO: change to the right prop type.
export default function BlogDetails({blogPost}: any){
    const {featuredImage, materialsAndTools, method, title, thumbnail} = blogPost.fields
    console.log(blogPost)
 
    return(
        <div>
            <div>
            <Image 
            src={'https:' + thumbnail.fields.file.url}
            width={500}
            height={500}
            alt="blog post"
            />
                <h2>{title}</h2>
            </div>
            <div >
        <h3>Du behöver:</h3>
        <ul>
          {materialsAndTools.map((ing : string, index: number) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      </div>
      <div>
            {documentToReactComponents(method)}
      </div>
        </div>
    )
}