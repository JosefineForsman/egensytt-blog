import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

export default function BlogPostCard({ blogPosts }: any) {
    const { slug, materialsAndTools, thumbnail, title } = blogPosts.fields;

    return (
        <Card sx={{ maxWidth: 382, marginBottom: 2, marginLeft: { xs: "30px", sm: "0px" } }}>
            <CardMedia
                component="img"
                height="350px"
                image={'https:' + thumbnail.fields.file.url}
                alt="blog post"
                object-fit= "cover"
            />
            <CardContent>
                <Typography sx={{fontSize:"14px", textTransform:"uppercase", color:"rgba(0, 0, 0, 0.31)", fontWeight:"500"}}>Barnkläder  -   Nov 17  2023</Typography>
                <Typography sx={{color:"#151864", fontSize:"24px", fontWeight:"bold"}}>
                    {title}
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