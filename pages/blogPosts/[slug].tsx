import React from 'react';
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';
import BlogPosts from '..';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({ content_type: 'blogPost' });

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps({ params }: any) {
    const { items } = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug,
    });
    return {
        props: { blogPost: items[0] },
    };
}

export default function BlogDetails({ blogPost }: any) {
    console.log(blogPost)
    const { featuredImage, materialsAndTools, method, title, thumbnail} = blogPost.fields;

    return (
        <Container sx={{display:"flex", justifyContent:"center", alignItems:"left", width:"700px"}}>
                <Box sx={{display:"flex", flexDirection:"column", width:"100%"}}>
                    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                        <Image   
                            src={'https:' + thumbnail.fields.file.url}
                            width={600}
                            height={500}
                            alt="blog post"
                        />
                        </Box>

                    <Typography variant="h4" sx={{fontWeight:"bold", margin:"20px 0px"}}>
                            {title}
                        </Typography>
                        <Box sx={{width:"100%"}}>
                    <Box sx={{display:"flex", flexDirection:"column", width:"100%"}}>
                    <Typography sx={{fontSize:"20px"}}>
                        Du behöver:
                    </Typography>
                        </Box>
                        {materialsAndTools.map((ing: string, index: number) => (
                            <Chip key={index} label={ing} variant="outlined" sx={{ margin:  0.5, bgcolor:"#151864", color:"white" }} />
                            ))}
                    </Box>
                    <Typography variant="body1" gutterBottom>
                        {documentToReactComponents(method)}
                    </Typography>
            </Box>
        </Container>
    );
}