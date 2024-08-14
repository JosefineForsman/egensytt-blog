import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { Post } from "../types";

const InstagramGrid = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
      );
      const data = await response.json();
      console.log(data);
      setPosts(data.data);
    };

    fetchInstagramPosts();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginTop: 2, marginBottom: 2 }}>
        Instagram
      </Typography>
      <Box
        sx={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
        }}>
        <Grid container spacing={1}>
          {posts.map((post) => (
            <Grid item xs={6} sm={4} md={4} key={post.id}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea
                  onClick={() => window.open(post.permalink, "_blank")}>
                  <Box sx={{ paddingTop: "100%" }}>
                    {post.media_type === "VIDEO" ? (
                      <video
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={post.media_url}
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        image={post.media_url}
                        alt={post.caption}
                      />
                    )}
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InstagramGrid;
