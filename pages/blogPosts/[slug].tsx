import React from 'react';
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';

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
    const { featuredImage, materialsAndTools, method, title, thumbnail } = blogPost.fields;

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Paper elevation={3} sx={{ padding:   2 }}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Image   
                            src={'https:' + thumbnail.fields.file.url}
                            width={500}
                            height={500}
                            alt="blog post"
                        />
                        <Typography variant="h2" gutterBottom>
                            {title}
                        </Typography>
                    </Box>
                    <Typography variant="h5" gutterBottom>
                        Du behöver:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                        {materialsAndTools.map((ing: string, index: number) => (
                            <Chip key={index} label={ing} variant="outlined" sx={{ margin:  0.5 }} />
                        ))}
                    </Box>
                    <Typography variant="body1" gutterBottom>
                        {documentToReactComponents(method)}
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
}