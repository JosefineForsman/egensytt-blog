import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

export default function BlogPostCard({ blogPosts }: any) {
    const { slug, materialsAndTools, thumbnail, title } = blogPosts.fields;

    return (
        <Card sx={{ maxWidth:  800, marginBottom:  2 }}>
            <CardMedia
                component="img"
                height="fit-content"
                image={'https:' + thumbnail.fields.file.url}
                alt="blog post"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Verktyg och material: {materialsAndTools.join(', ')}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/blogPosts/${slug}`}>
                    <Button size="small" color="primary">
                        Läs mer
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}