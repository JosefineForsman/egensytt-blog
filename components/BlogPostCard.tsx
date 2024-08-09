import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { sv } from "date-fns/locale";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
} from "@mui/material";

export default function BlogPostCard({ blogPosts }: any) {
  const { slug, materialsAndTools, thumbnail, title } = blogPosts.fields;
  const { createdAt } = blogPosts.sys;

  console.log("createdAt:", createdAt);

  let date = "";
  if (createdAt) {
    try {
      date = format(new Date(createdAt), "PP", { locale: sv });
    } catch (error) {
      console.error("Invalid date:", createdAt);
    }
  }

  return (
    <Grid item>
      <Box display="flex" justifyContent="center">
        <Card
          sx={{
            width: { xs: "90%", sm: "100%", md: "100%" },
            maxWidth: "none",
            marginBottom: 2,
          }}>
          <CardMedia
            component="img"
            height="350px"
            image={"https:" + thumbnail.fields.file.url}
            alt="blog post"
            object-fit="cover"
          />
          <CardContent>
            <Typography
              sx={{
                fontSize: "14px",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.28)",
                fontWeight: "500",
              }}>
              {date}
            </Typography>
            <Box height={50}>
              <Typography
                sx={{
                  color: "#151864",
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  fontWeight: "bold",
                }}>
                {title}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Link href={`/blogPosts/${slug}`}>
              <Button size="small" color="primary">
                Läs mer
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
