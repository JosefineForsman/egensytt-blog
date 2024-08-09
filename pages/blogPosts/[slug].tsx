import React from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Container,
  Typography,
  Box,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import BlogPosts from "..";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, CardMedia } from "@mui/material";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blogPost" });

  const paths = res.items.map((item) => {
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
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  return {
    props: { blogPost: items[0] },
  };
}

export default function BlogDetails({ blogPost }: any) {
  console.log(blogPost);
  const {
    featuredImage,
    materialsAndTools,
    method,
    title,
    thumbnail,
    imageGrid,
  } = blogPost.fields;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "700px" },
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth="500px">
          <Image
            src={"https:" + thumbnail.fields.file.url}
            layout="responsive"
            width={500}
            height={375}
            alt="blog post"
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            margin: "20px 0px",
            fontSize: { xs: "20px", sm: "24px" },
          }}>
          {title}
        </Typography>
        <Box sx={{ width: "100%", mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Du behöver:
          </Typography>
          <List>
            {materialsAndTools.map((item: string, index: number) => (
              <ListItem key={index} sx={{ padding: 0.5 }}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        {imageGrid && imageGrid.length > 0 && (
          <Grid container spacing={3}>
            {imageGrid.map((image: any, index: number) => {
              if (image.fields && image.fields.file && image.fields.file.url) {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <CardMedia
                      component="img"
                      image={"https:" + image.fields.file.url}
                      alt={`Image ${index + 1}`}
                    />
                  </Grid>
                );
              } else {
                return null;
              }
            })}
          </Grid>
        )}
        <Typography variant="body1" gutterBottom>
          {documentToReactComponents(method)}
        </Typography>
      </Box>
    </Container>
  );
}
